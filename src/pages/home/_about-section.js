import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import { navigate } from 'gatsby'

// @material-ui/icons
import BarChart from '@material-ui/icons/BarChart'
import VerifiedUser from '@material-ui/icons/VerifiedUser'
import Class from '@material-ui/icons/Class'
import Chat from '@material-ui/icons/Chat'
// core components
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'
import InfoArea from '../../components/shared/InfoArea/InfoArea.jsx'

import Energy from '@material-ui/icons/Autorenew'
import Biomedic from '@material-ui/icons/NaturePeople'
import IT from '@material-ui/icons/DevicesOther'
import Food from '@material-ui/icons/Fastfood'
import Other from '@material-ui/icons/CardGiftcard'

import NavPillsStatic from '../../components/shared/NavPillsStatic/NavPillsStatic.jsx'

import styles from '../../components/jss/maritim/views/landingPageSections/productStyle.jsx'

const useStyles = makeStyles(styles)

export default function AboutSection() {
    const classes = useStyles()
    return (
        <div className={classes.section}>
            <GridContainer className={classes.container}>
                <GridItem xs={12} sm={12} md={12}>
                    <h2 className={classes.title2}>Choose the categories</h2>
                    <NavPillsStatic
                        alignCenter
                        tabs={[
                            {
                                tabButton: 'Energy',
                                tabIcon: Energy,
                                color: 'success',
                                onClick: () => {
                                    navigate('/products?cat=energy')
                                },
                            },
                            {
                                tabButton: 'IT',
                                tabIcon: IT,
                                color: 'warning',
                                onClick: () => {
                                    navigate('/products?cat=it')
                                },
                            },
                            {
                                tabButton: 'Biomedic',
                                tabIcon: Biomedic,
                                color: 'danger',
                                onClick: () => {
                                    navigate('/products?cat=biomedic')
                                },
                            },
                            {
                                tabButton: 'Food',
                                tabIcon: Food,
                                color: 'rose',
                                onClick: () => {
                                    navigate('/products?cat=food')
                                },
                            },
                            {
                                tabButton: 'Others',
                                tabIcon: Other,
                                color: 'info',
                                onClick: () => {
                                    navigate('/products?cat=others')
                                },
                            },
                        ]}
                    />
                </GridItem>
            </GridContainer>
            <div className={classes.separator}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                        <InfoArea
                            title="Free chat"
                            description="Help innovators and stakeholders to communicate for the further support of each other"
                            icon={Chat}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <InfoArea
                            title="Verified Users"
                            description="The innovators and the stakeholders registered and verified from the company"
                            icon={VerifiedUser}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <InfoArea
                            title="Various Fields"
                            description="Accommodate various fields of innovation for Indonesia's innovators and stakeholders"
                            icon={BarChart}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <InfoArea
                            title="Patent Status"
                            description="Help the innovators to get a patent for the innovation as an Intellectual Property of Indonesia"
                            icon={Class}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}
