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
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
}
const RelatedInnovation = ({ classes, category, title }) => {
    const firebase = React.useContext(FirebaseContext)
    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        if (!firebase) {
            return
        }
        console.log('how many times this guy run')

        const db = firebase.firestore()
        const query = db.collection('innovation')

        // TODO: filter using category
        // .where('category', '==', `${category}`)

        query.get().then(async snapshots => {
            const productsSnapshot = []
            await new Promise((resolve, reject) => {
                let ctr = 0
                snapshots.forEach(async doc => {
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
                        productsSnapshot.push(productDoc)
                    }
                    ctr++
                    if (snapshots.docs.length === ctr) {
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
                    {products.map((product, idx) => {
                        console.log('hi')
                        console.log(title)
                        if (product.data.title === title) return null
                        return (
                            <div
                                className={classes.relatedPostWrapper}
                                key={idx}
                            >
                                <a
                                    href={`/product-detail/?pid=${product.id}`}
                                    className={classes.postImageWrapper}
                                >
                                    <img
                                        src={product.data.image_1}
                                        alt="..."
                                        className={classes.postImage}
                                    />
                                </a>
                                <div className={classes.postDescription}>
                                    <div className={classes.postCategory}>
                                        <h6>{product.data.category}</h6>
                                    </div>
                                    <h4 className={classes.postTitle}>
                                        <a
                                            href={`/product-detail/?pid=${product.id}`}
                                            className={classes.postImageWrapper}
                                        >
                                            {product.data.title}
                                        </a>
                                    </h4>
                                    <p className={classes.postExplain}>
                                        {product.data.description}
                                        <a
                                            href={`/product-detail/?pid=${product.id}`}
                                            className={classes.postImageWrapper}
                                        >
                                            ...Read more
                                        </a>
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
                {!products.length && (
                    <h6>Belum ada inovasi terkait untuk saat ini</h6>
                )}
            </GridItem>
        </GridContainer>
    )
}

export default withStyles(productsDetailStyle)(RelatedInnovation)
