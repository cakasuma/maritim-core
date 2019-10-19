import React from 'react'
import { Link } from 'gatsby'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'
import Slider from 'react-slick'
import { FirebaseContext } from 'gatsby-plugin-firebase'

import productsDetailStyle from '../../components/jss/maritim/views/productDetailPage.jsx'

const relatedSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
}
const RelatedInnovation = ({ classes, category, title }) => {
    const firebase = React.useContext(FirebaseContext)
    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        if (!firebase) {
            return
        }

        const db = firebase.firestore()
        const query = db
            .collection('innovation')
            .where('category', '==', `${category}`)
            .where('title', '<', `${title}`)
        // TODO: filter using category
        // .where('category', '==', category)

        query.get().then(async snapshots => {
            const productsSnapshot = []
            await new Promise((resolve, reject) => {
                let ctr = 0
                snapshots.forEach(async doc => {
                    console.log(ctr)
                    const productDoc = {}
                    productDoc.id = doc.id
                    productDoc.data = doc.data()

                    const user = await firebase
                        .firestore()
                        .collection('users')
                        .doc(doc.data().innovator)
                        .get()

                    if (user.exists) {
                        productDoc.data.innovator = user.data().name
                    }
                    ctr++

                    if (snapshots.docs.length === ctr) {
                        console.log('hi')
                        resolve()
                    }
                })
            })
            setProducts(productsSnapshot)
        })
    }, [firebase])

    return (
        <GridContainer className={classes.container}>
            <div className={classes.relatedTitle}>
                <h2 className={classes.relatedName}>Inovasi terkait</h2>
                <span className={classes.relatedSeparator}></span>
            </div>
            <GridItem xs={12} sm={12} md={12}>
                <Slider
                    className={classes.relatedContainer}
                    {...relatedSettings}
                >
                    {products &&
                        products.map((product, idx) => (
                            <div
                                className={classes.relatedPostWrapper}
                                key={idx}
                            >
                                <Link
                                    to={`/product-detail?pid=${product.id}`}
                                    className={classes.postImageWrapper}
                                >
                                    <img
                                        src={product.data.image_1}
                                        alt="..."
                                        className={classes.postImage}
                                    />
                                </Link>
                                <div className={classes.postDescription}>
                                    <div className={classes.postCategory}>
                                        <h6>{product.data.category}</h6>
                                    </div>
                                    <h4 className={classes.postTitle}>
                                        <Link
                                            to={`/product-detail?pid=${product.id}`}
                                            className={classes.postImageWrapper}
                                        >
                                            {product.data.title}
                                        </Link>
                                    </h4>
                                    <p className={classes.postExplain}>
                                        {product.data.description}
                                        <Link
                                            to={`/product-detail?pid=${product.id}`}
                                            className={classes.postImageWrapper}
                                        >
                                            ...Read more
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        ))}
                </Slider>
                {!products.length && (
                    <h6>Belum ada inovasi terkait untuk saat ini</h6>
                )}
            </GridItem>
        </GridContainer>
    )
}

export default withStyles(productsDetailStyle)(RelatedInnovation)
