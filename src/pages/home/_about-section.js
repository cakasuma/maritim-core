import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
import ThumbUp from '@material-ui/icons/ThumbUp'
import VerifiedUser from '@material-ui/icons/VerifiedUser'
import ContactPhone from '@material-ui/icons/ContactPhone'
// core components
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'
import InfoArea from '../../components/shared/InfoArea/InfoArea.jsx'

import styles from '../../components/jss/maritim/views/landingPageSections/productStyle.jsx'

const useStyles = makeStyles(styles)

export default function AboutSection() {
    const classes = useStyles()
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>
                        Let{"'"}s talk about innovation
                    </h2>
                    <h5 className={classes.description}>
                        The innovation hosted in this platform comes from
                        verified students and source, which are worth to become
                        your next investment
                    </h5>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Verified students"
                            description="We verify students background before they can submit their innovation. despite of it, it will be easy for innovator to create new innovation with us"
                            icon={VerifiedUser}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Trusted source"
                            description="We take a look at geuninity of the innovation seriously. as it will benefits both of the parties in continuation of the idea."
                            icon={ThumbUp}
                            iconColor="success"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Easily accessible"
                            description="the innovation will be available in our platform when innovator upload it to our system."
                            icon={ContactPhone}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}
