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
                    <h2 className={classes.title2}>Pilih kategori</h2>
                    <NavPillsStatic
                        alignCenter
                        tabs={[
                            {
                                tabButton: 'Energi',
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
                                tabButton: 'Biomedik',
                                tabIcon: Biomedic,
                                color: 'danger',
                                onClick: () => {
                                    navigate('/products?cat=biomedic')
                                },
                            },
                            {
                                tabButton: 'Olah pangan',
                                tabIcon: Food,
                                color: 'rose',
                                onClick: () => {
                                    navigate('/products?cat=food')
                                },
                            },
                            {
                                tabButton: 'Lainnya',
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
                            title="Chat gratis"
                            description=" Bantu inovator dan investor untuk berkomunikasi dengan mudah"
                            icon={Chat}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <InfoArea
                            title="Inovasi terpilih"
                            description="Inovasi akan direview oleh team maritim muda nusantara, untuk menguji syarat dan keoriginalitas produk"
                            icon={VerifiedUser}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <InfoArea
                            title="Beragam kategori"
                            description="Inovasi terpilih dari kategori penting seperti energi, IT, pangan, dan biomedik"
                            icon={BarChart}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <InfoArea
                            title="Status paten"
                            description="Membantu inovator untuk mendapatkan status paten produk indonesia"
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
