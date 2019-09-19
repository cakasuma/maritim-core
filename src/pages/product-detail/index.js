import React from 'react'

import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'
import Slider from 'react-slick'
import LocationOn from '@material-ui/icons/LocationOn'

import productsDetailStyle from '../../components/jss/maritim/views/productDetailPage.jsx'
import Button from '../../components/shared/CustomButtons/Button.jsx'
import Background from '../../components/shared/Image/background'
import Card from '../../components/shared/Card/Card.jsx'
import CardBody from '../../components/shared/Card/CardBody.jsx'
import Primary from '../../components/shared/Typography/Primary.jsx'
import NavPills from '../../components/shared/NavPills/NavPills.jsx'
import { Link } from 'gatsby'

import Layout from '../../components/layout/layout.js'
import SEO from '../../components/layout/seo.js'

import image1 from '../../images/bg.jpg'
// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard'
import Schedule from '@material-ui/icons/Schedule'
import List from '@material-ui/icons/List'
import image from '../../images/faces/avatar.jpg'

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
}

const relatedSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
}

class ProductDetail extends React.Component {
    state = {}

    render() {
        const { classes } = this.props
        return (
            <Layout>
                <SEO title="product detail" />
                <Background
                    className={classes.productHead}
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '18rem',
                    }}
                    img_name="landing-bg.jpg"
                    brightness="0.7"
                >
                    <GridContainer className={classes.container}>
                        <div className={classes.headerWrapper}>
                            <h2>Innovation title</h2>
                            <h3>Innovation description</h3>
                        </div>
                    </GridContainer>
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
                                <img src={image1} alt="First slide" />
                            </div>
                            <div>
                                <img src={image1} alt="Second slide" />
                            </div>
                            <div>
                                <img src={image1} alt="Third slide" />
                            </div>
                        </Slider>
                    </GridItem>
                    <GridItem
                        xs={12}
                        sm={6}
                        md={4}
                        className={classes.descriptionDetail}
                    >
                        <Card className={classes.card}>
                            <div className={classes.cardHeader}>
                                Innovation Info
                            </div>
                            <CardBody>
                                <Primary>
                                    <h4>Data</h4>
                                </Primary>
                                <p>
                                    <strong>Title:</strong> innovation title
                                </p>
                                <p>
                                    <strong>Category:</strong> innovation
                                    category
                                </p>
                                <p>
                                    <strong>Author:</strong> innovation author
                                </p>
                                <Primary>
                                    <h4>Brief description</h4>
                                </Primary>
                                <p>Lorem ipsum yes no</p>
                                <Button
                                    className={classes.contactButton}
                                    color="primary"
                                    size="md"
                                    onClick={e => {
                                        e.preventDefault()
                                        window.open(
                                            'https://wa.me/623424324234',
                                            '_blank',
                                        )
                                    }}
                                >
                                    Contact now +623424324234
                                </Button>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridContainer className={classes.navWrapper}>
                        <GridItem xs={12} sm={12} md={12}>
                            <NavPills
                                color="primary"
                                tabs={[
                                    {
                                        tabButton: 'Dashboard',
                                        tabIcon: Dashboard,
                                        tabContent: (
                                            <span>
                                                <p>
                                                    Collaboratively administrate
                                                    empowered markets via
                                                    plug-and-play networks.
                                                    Dynamically procrastinate
                                                    B2C users after installed
                                                    base benefits.
                                                </p>
                                                <br />
                                                <p>
                                                    Dramatically visualize
                                                    customer directed
                                                    convergence without
                                                    revolutionary ROI.
                                                    Collaboratively administrate
                                                    empowered markets via
                                                    plug-and-play networks.
                                                    Dynamically procrastinate
                                                    B2C users after installed
                                                    base benefits.
                                                </p>
                                                <br />
                                                <p>
                                                    Dramatically visualize
                                                    customer directed
                                                    convergence without
                                                    revolutionary ROI.
                                                    Collaboratively administrate
                                                    empowered markets via
                                                    plug-and-play networks.
                                                    Dynamically procrastinate
                                                    B2C users after installed
                                                    base benefits.
                                                </p>
                                            </span>
                                        ),
                                    },
                                    {
                                        tabButton: 'Schedule',
                                        tabIcon: Schedule,
                                        tabContent: (
                                            <span>
                                                <p>
                                                    Efficiently unleash
                                                    cross-media information
                                                    without cross-media value.
                                                    Quickly maximize timely
                                                    deliverables for real-time
                                                    schemas.
                                                </p>
                                                <br />
                                                <p>
                                                    Dramatically maintain
                                                    clicks-and-mortar solutions
                                                    without functional
                                                    solutions. Dramatically
                                                    visualize customer directed
                                                    convergence without
                                                    revolutionary ROI.
                                                    Collaboratively administrate
                                                    empowered markets via
                                                    plug-and-play networks.
                                                    Dynamically procrastinate
                                                    B2C users after installed
                                                    base benefits.
                                                </p>
                                            </span>
                                        ),
                                    },
                                    {
                                        tabButton: 'Tasks',
                                        tabIcon: List,
                                        tabContent: (
                                            <span>
                                                <p>
                                                    Collaboratively administrate
                                                    empowered markets via
                                                    plug-and-play networks.
                                                    Dynamically procrastinate
                                                    B2C users after installed
                                                    base benefits.
                                                </p>
                                                <br />
                                                <p>
                                                    Dramatically visualize
                                                    customer directed
                                                    convergence without
                                                    revolutionary ROI.
                                                    Collaboratively administrate
                                                    empowered markets via
                                                    plug-and-play networks.
                                                    Dynamically procrastinate
                                                    B2C users after installed
                                                    base benefits.
                                                </p>
                                                <br />
                                                <p>
                                                    Dramatically visualize
                                                    customer directed
                                                    convergence without
                                                    revolutionary ROI.
                                                    Collaboratively administrate
                                                    empowered markets via
                                                    plug-and-play networks.
                                                    Dynamically procrastinate
                                                    B2C users after installed
                                                    base benefits.
                                                </p>
                                            </span>
                                        ),
                                    },
                                ]}
                            />
                        </GridItem>
                    </GridContainer>
                    <div className={classes.relatedTitle}>
                        <h2 className={classes.relatedName}>
                            Related innovation
                        </h2>
                        <span className={classes.relatedSeparator}></span>
                    </div>
                    <GridItem xs={12} sm={12} md={12}>
                        <Slider
                            className={classes.relatedContainer}
                            {...relatedSettings}
                        >
                            {new Array(8).fill(8).map((em, idx) => (
                                <div className={classes.relatedPostWrapper}>
                                    <Link
                                        to="/product-detail"
                                        className={classes.postImageWrapper}
                                    >
                                        <img
                                            src={image}
                                            alt="..."
                                            className={classes.postImage}
                                        />
                                    </Link>
                                    <div className={classes.postDescription}>
                                        <div className={classes.postCategory}>
                                            <h6>Pangan</h6>
                                        </div>
                                        <h4 className={classes.postTitle}>
                                            <Link
                                                to="/product-detail"
                                                className={
                                                    classes.postImageWrapper
                                                }
                                            >
                                                Autodesk look into the future
                                            </Link>
                                        </h4>
                                        <p className={classes.postExplain}>
                                            alksdfjalskdfj jlskdjflskdf j sdlkf
                                            jlskd{' '}
                                            <Link
                                                to="/product-detail"
                                                className={
                                                    classes.postImageWrapper
                                                }
                                            >
                                                ...Read more
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </GridItem>
                </GridContainer>
            </Layout>
        )
    }
}

export default withStyles(productsDetailStyle)(ProductDetail)
