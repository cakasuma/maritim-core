import React from 'react'
// nodejs library to set properties for components

import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import CircularProgress from '@material-ui/core/CircularProgress'

import { Link } from 'gatsby'
import { FirebaseContext } from 'gatsby-plugin-firebase'

// @material-ui/icons

// core components
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'

import productStyle from '../../components/jss/maritim/views/landingPageSections/productStyle.jsx'

const ProductSection = ({ classes }) => {
    const firebase = React.useContext(FirebaseContext)
    const [products, setProducts] = React.useState(null)

    React.useEffect(() => {
        if (!firebase) {
            return
        }

        const db = firebase.firestore()
        const query = db
            .collection('innovation')
            .where('approved', '==', true)
            .orderBy('viewers')
            .limit(3)

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
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Inovasi terkini</h2>
                    <h5 className={classes.description}>
                        Inilah inovasi yang popular di aplikasi saat ini
                    </h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={10}>
                    {!products ? (
                        <CircularProgress
                            className={classes.circularProgress}
                            color="secondary"
                        />
                    ) : (
                        products.map((product, idx) => {
                            const date = new Date(product.data.timestamp)
                            const year = date.getFullYear()
                            const month = date.getMonth() + 1
                            const day = date.getDate()
                            const timestamp = `${year}/${month}/${day}`
                            if (idx % 2 !== 0) {
                                return (
                                    <div key={idx} className={classes.card}>
                                        <GridContainer justify="center">
                                            <GridItem
                                                xs={12}
                                                sm={5}
                                                md={5}
                                                className={classes.cardWrapper}
                                            >
                                                <Link
                                                    to={`/product-detail?pid=${product.id}`}
                                                    className={
                                                        classes.cardImageWrapper
                                                    }
                                                >
                                                    <img
                                                        src={
                                                            product.data.image_1
                                                        }
                                                        alt="..."
                                                        className={
                                                            classes.cardImage
                                                        }
                                                    />
                                                </Link>
                                            </GridItem>
                                            <GridItem
                                                xs={12}
                                                sm={7}
                                                md={7}
                                                className={classes.cardWrapper}
                                            >
                                                <div
                                                    className={
                                                        classes.cardCategoryWrapper
                                                    }
                                                >
                                                    <h6
                                                        className={
                                                            classes.cardCategory
                                                        }
                                                    >
                                                        {product.data.category}
                                                    </h6>
                                                </div>
                                                <Link
                                                    to={`/product-detail?pid=${product.id}`}
                                                    className={
                                                        classes.cardImageWrapper
                                                    }
                                                >
                                                    <h3
                                                        className={
                                                            classes.cardTitle
                                                        }
                                                    >
                                                        {product.data.title}
                                                    </h3>
                                                </Link>
                                                <p
                                                    className={
                                                        classes.cardDescription
                                                    }
                                                >
                                                    {product.data.description}
                                                    <Link
                                                        to={`/product-detail?pid=${product.id}`}
                                                        className={
                                                            classes.cardImageWrapper
                                                        }
                                                    >
                                                        ...Read more
                                                    </Link>
                                                </p>
                                                <p
                                                    className={
                                                        classes.cardAuthor
                                                    }
                                                >
                                                    By{' '}
                                                    <Link
                                                        to={`/product-detail?pid=${product.id}`}
                                                        className={
                                                            classes.cardImageWrapper
                                                        }
                                                    >
                                                        <b>
                                                            {
                                                                product.data
                                                                    .innovator
                                                            }
                                                        </b>
                                                    </Link>{' '}
                                                    {timestamp}
                                                </p>
                                            </GridItem>
                                        </GridContainer>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={idx} className={classes.card}>
                                        <GridContainer
                                            justify="center"
                                            className={classes.cardReverse}
                                        >
                                            <GridItem
                                                xs={12}
                                                sm={7}
                                                md={7}
                                                className={classes.cardWrapper}
                                            >
                                                <div
                                                    className={
                                                        classes.cardCategoryWrapper
                                                    }
                                                >
                                                    <h6
                                                        className={
                                                            classes.cardCategory
                                                        }
                                                    >
                                                        {product.data.category}
                                                    </h6>
                                                </div>
                                                <Link
                                                    to={`/product-detail?pid=${product.id}`}
                                                    className={
                                                        classes.cardImageWrapper
                                                    }
                                                >
                                                    <h3
                                                        className={
                                                            classes.cardTitle
                                                        }
                                                    >
                                                        {product.data.title}
                                                    </h3>
                                                </Link>
                                                <p
                                                    className={
                                                        classes.cardDescription
                                                    }
                                                >
                                                    {product.data.description}
                                                    <Link
                                                        to={`/product-detail?pid=${product.id}`}
                                                        className={
                                                            classes.cardImageWrapper
                                                        }
                                                    >
                                                        ...Read more
                                                    </Link>
                                                </p>
                                                <p
                                                    className={
                                                        classes.cardAuthor
                                                    }
                                                >
                                                    By{' '}
                                                    <Link
                                                        to={`/product-detail?pid=${product.id}`}
                                                        className={
                                                            classes.cardImageWrapper
                                                        }
                                                    >
                                                        <b>
                                                            {
                                                                product.data
                                                                    .innovator
                                                            }
                                                        </b>
                                                    </Link>{' '}
                                                    {timestamp}
                                                </p>
                                            </GridItem>
                                            <GridItem
                                                xs={12}
                                                sm={5}
                                                md={5}
                                                className={classes.cardWrapper}
                                            >
                                                <Link
                                                    to={`/product-detail?pid=${product.id}`}
                                                    className={
                                                        classes.cardImageWrapper
                                                    }
                                                >
                                                    <img
                                                        src={
                                                            product.data.image_1
                                                        }
                                                        alt="..."
                                                        className={
                                                            classes.cardImage
                                                        }
                                                    />
                                                </Link>
                                            </GridItem>
                                        </GridContainer>
                                    </div>
                                )
                            }
                        })
                    )}
                </GridItem>
            </GridContainer>
        </div>
    )
}

ProductSection.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(productStyle)(ProductSection)
