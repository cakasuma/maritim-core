import React from 'react'

import { navigate } from 'gatsby'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'
import Slider from 'react-slick'
import { FirebaseContext } from 'gatsby-plugin-firebase'

import productsDetailStyle from '../../components/jss/maritim/views/productDetailPage.jsx'
import Button from '../../components/shared/CustomButtons/Button.jsx'
import Background from '../../components/shared/Image/background'
import Card from '../../components/shared/Card/Card.jsx'
import CardBody from '../../components/shared/Card/CardBody.jsx'
import Primary from '../../components/shared/Typography/Primary.jsx'
import NavPills from '../../components/shared/NavPills/NavPills.jsx'
import { Link } from 'gatsby'
import Badge from '../../components/shared/Badge/Badge.jsx'

import Layout from '../../components/layout/layout.js'
import SEO from '../../components/layout/seo.js'

import RelatedInnovation from './related-innovation'
// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard'
import Schedule from '@material-ui/icons/Schedule'
import List from '@material-ui/icons/List'

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
}

const ProductDetail = ({ classes }) => {
    const firebase = React.useContext(FirebaseContext)
    const [product, setProduct] = React.useState({})

    React.useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        if (!urlParams.get('pid')) {
            navigate('/products')
            return
        }
        const product_id = urlParams.get('pid')
        console.log(product_id)
        if (!firebase) {
            return
        }

        const db = firebase.firestore()
        const query = db.collection('innovation').doc(product_id)

        query.get().then(snapshots => {
            if (snapshots.exists) {
                firebase
                    .firestore()
                    .collection('users')
                    .doc(snapshots.data().innovator)
                    .get()
                    .then(user => {
                        if (user.exists) {
                            const productDoc = snapshots.data()
                            productDoc.innovator = user.data().name
                            productDoc.phone = user.data().phone
                            productDoc.id = product_id
                            setProduct(productDoc)
                        }
                    })
            }
        })
    }, [firebase])

    return (
        product && (
            <Layout>
                <SEO title="product detail" />
                <Background
                    className={classes.productHead}
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '20rem',
                    }}
                    img_name="landing-bg.jpg"
                    brightness="0.7"
                >
                    {' '}
                    {product && (
                        <GridContainer className={classes.container}>
                            <div className={classes.headerWrapper}>
                                <h2>{product.title}</h2>
                                <h3>{product.subtitle}</h3>
                            </div>
                        </GridContainer>
                    )}
                </Background>
                <GridContainer className={classes.container}>
                    <GridItem
                        xs={12}
                        sm={6}
                        md={8}
                        className={classes.imageDetail}
                    >
                        <Slider
                            className={classes.sliderContainer}
                            {...settings}
                        >
                            <div>
                                <img src={product.image_1} alt="First slide" />
                            </div>
                            {product.image_2 && (
                                <div>
                                    <img
                                        src={product.image_2}
                                        alt="Second slide"
                                    />
                                </div>
                            )}
                            {product.abstract_file && (
                                <div>
                                    <img
                                        src={product.abstract_file}
                                        alt="Third slide"
                                    />
                                </div>
                            )}
                        </Slider>
                    </GridItem>
                    <GridItem
                        xs={12}
                        sm={6}
                        md={4}
                        className={classes.descriptionDetail}
                    >
                        <div>
                            <Card className={classes.card}>
                                <div className={classes.cardHeader}>
                                    Innovation Info
                                </div>
                                <CardBody>
                                    <Primary>
                                        <h4>Data</h4>
                                    </Primary>
                                    <p>
                                        <strong>Judul:</strong> {product.title}
                                    </p>
                                    <p>
                                        <strong>Sub judul:</strong>{' '}
                                        {product.subtitle}
                                    </p>
                                    <p>
                                        <strong>Inovator:</strong>{' '}
                                        {product.innovator}
                                    </p>
                                    <Primary>
                                        <h4>Kelebihan produk</h4>
                                    </Primary>
                                    <p>{product.excellence}</p>
                                    <Button
                                        className={classes.contactButton}
                                        color="primary"
                                        size="md"
                                        onClick={e => {
                                            e.preventDefault()
                                            window.open(
                                                `https://wa.me/${product.phone}`,
                                                '_blank',
                                            )
                                        }}
                                    >
                                        Contact now {product.phone}
                                    </Button>
                                </CardBody>
                            </Card>
                            <Card className={classes.cardSecondary}>
                                <div className={classes.cardHeader}>
                                    Kategori
                                </div>
                                <CardBody>
                                    {product.category === 'Energy' && (
                                        <Badge color="success">Energi</Badge>
                                    )}
                                    {product.category === 'IT' && (
                                        <Badge color="primary">IT</Badge>
                                    )}
                                    {product.category === 'Food' && (
                                        <Badge color="info">Olah pangan</Badge>
                                    )}
                                    {product.category === 'Biomedic' && (
                                        <Badge color="warning">Biomedik</Badge>
                                    )}
                                    {product.category === 'Others' && (
                                        <Badge color="rose">Lainnya</Badge>
                                    )}
                                </CardBody>
                            </Card>
                        </div>
                    </GridItem>
                    <GridContainer className={classes.navWrapper}>
                        <GridItem xs={12} sm={12} md={12}>
                            <NavPills
                                color="primary"
                                tabs={[
                                    {
                                        tabButton: 'Deskripsi',
                                        tabIcon: Dashboard,
                                        tabContent: (
                                            <span>
                                                <p>{product.description}</p>
                                            </span>
                                        ),
                                    },
                                    {
                                        tabButton: 'Tahap pembuatan',
                                        tabIcon: Schedule,
                                        tabContent: (
                                            <span>
                                                <p>
                                                    {product.development_stage}
                                                </p>
                                            </span>
                                        ),
                                    },
                                    {
                                        tabButton: 'Status paten',
                                        tabIcon: List,
                                        tabContent: (
                                            <span>
                                                <p>{product.patent_status}</p>
                                            </span>
                                        ),
                                    },
                                ]}
                            />
                        </GridItem>
                    </GridContainer>
                    <RelatedInnovation
                        category={product.category}
                        title={product.title}
                    />
                </GridContainer>
            </Layout>
        )
    )
}

export default withStyles(productsDetailStyle)(ProductDetail)
