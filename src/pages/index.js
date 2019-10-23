import React from 'react'

import { Link, navigate } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/layout/seo'

import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import GridContainer from '../components/shared/Grid/GridContainer.jsx'
import GridItem from '../components/shared/Grid/GridItem.jsx'

import Button from '../components/shared/CustomButtons/Button.jsx'
import Parallax from '../components/shared/Parallax/Parallax.jsx'

import landingPageStyle from '../components/jss/maritim/views/landingPage.jsx'

import AboutSection from './home/_about-section.js'
import ProductSection from './home/_product-section.js'
import WorkSection from './home/_work-section.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const IndexPage = ({ classes }) => (
    <Layout>
        <SEO title="Home" />
        <div>
            <Parallax
                className={classes.parallax}
                image={require('../images/svg/undraw-new-ideas.svg')}
            >
                <GridContainer className={classes.container}>
                    <GridContainer className={classes.container}>
                        <GridItem xs={12} sm={12} md={12}>
                            <h3 className={classes.titleSecondary}>
                                Inilah saatnya kita
                            </h3>
                            <h1 className={classes.titleAnimation}>
                                Berinovasi
                            </h1>
                            <br />
                            <Button
                                component={Link}
                                color="danger"
                                size="lg"
                                to="/submit-idea"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faLightbulb} />
                                Mulai sekarang
                            </Button>
                            <br />
                            <h2 className={classes.separator}>Atau</h2>
                            <Button
                                component={Link}
                                color="info"
                                size="lg"
                                to="/products"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Lihat semua inovasi
                            </Button>
                        </GridItem>
                    </GridContainer>
                </GridContainer>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <AboutSection />
                    <ProductSection />
                    <WorkSection />
                </div>
            </div>
        </div>
    </Layout>
)

IndexPage.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(landingPageStyle)(IndexPage)
