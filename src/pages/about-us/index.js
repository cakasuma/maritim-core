import React from 'react'

import { Link, navigate } from 'gatsby'

import Layout from '../../components/layout/layout'
import SEO from '../../components/layout/seo'

import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import Energy from '@material-ui/icons/Autorenew'
import Biomedic from '@material-ui/icons/NaturePeople'
import IT from '@material-ui/icons/DevicesOther'
import Food from '@material-ui/icons/Fastfood'
import Other from '@material-ui/icons/CardGiftcard'

import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'

import Button from '../../components/shared/CustomButtons/Button.jsx'
import Parallax from '../../components/shared/Parallax/Parallax.jsx'
import NavPillsStatic from '../../components/shared/NavPillsStatic/NavPillsStatic.jsx'

import aboutUsStyle from '../../components/jss/maritim/views/aboutUsStyle.jsx'

import FeedbackSection from './_feedback'
import OurTeamSection from './_our-team'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const IndexPage = ({ classes }) => (
    <Layout>
        <SEO title="Home" />
        <div>
            <Parallax
                filter
                image={require('../../images/landing-bg.jpg')}
                className={classes.parallax}
            >
                <GridContainer className={classes.container}>
                    <GridItem xs={12} sm={12} md={12}>
                        <h1 className={classes.title}>
                            MARITIM MUDA NUSANTARA
                        </h1>
                        <h4 className={classes.titleSecondary}>
                            Kita Muda, Wujudkan Poros Maritim Dunia
                        </h4>
                    </GridItem>
                </GridContainer>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <OurTeamSection />
                    <FeedbackSection />
                </div>
            </div>
        </div>
    </Layout>
)

IndexPage.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(aboutUsStyle)(IndexPage)
