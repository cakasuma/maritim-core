import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons

// core components
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'
import Button from '../../components/shared/CustomButtons/Button.jsx'
import Card from '../../components/shared/Card/Card.jsx'
import CardBody from '../../components/shared/Card/CardBody.jsx'
import CardFooter from '../../components/shared/Card/CardFooter.jsx'

import styles from '../../components/jss/maritim/views/landingPageSections/teamStyle.jsx'

import team1 from '../../images/faces/avatar.jpg'
import team2 from '../../images/faces/christian.jpg'
import team3 from '../../images/faces/kendall.jpg'

const useStyles = makeStyles(styles)

export default function TeamSection() {
    const classes = useStyles()
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid,
    )
    return (
        <div className={classes.section}>
            <h2 className={classes.title}>Keanggotaan</h2>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card plain>
                            <GridItem
                                xs={12}
                                sm={12}
                                md={6}
                                className={classes.itemGrid}
                            >
                                <img
                                    src="https://i1.rgstatic.net/ii/profile.image/279094743846920-1443552780848_Q512/Kaisar_Akhir3.jpg"
                                    alt="..."
                                    className={imageClasses}
                                />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Kaisar
                                <br />
                                <small className={classes.smallTitle}>
                                    CEO Maritim muda nusantara
                                </small>
                            </h4>
                            <CardBody>
                                <p className={classes.description}>
                                    Kaisar Akhir baru saja menyelesaikan
                                    pendidikan MSc in Maritime Affairs dari
                                    World Maritime University (WMU), Swedia,
                                    dengan spesialisasi Ocean Sustainability,
                                    Governance and Management pada November 2018
                                    yang didanai secara penuh oleh beasiswa dari
                                    LPDP. Sejak kuliah S1 pada program Ilmu dan
                                    Teknologi Kelautan di IPB, dia telah aktif
                                    dalam kegiatan sosial, kemahasiswaan, dan
                                    keilmiahan dari tingkat kampus/lokal,
                                    nasional, hingga internasional. Fokus ia
                                    sekarang pada kegiatan berupa edukasi,
                                    edutrip, aksi sosial, konsultasi, dan
                                    advokasi guna mendukung Indonesia sebagai
                                    Poros Maritim Dunia serta penanganan sampah
                                    plastik laut di Indonesia. Ia percaya dengan
                                    kolaborasi dan profesionalisme, itu semua
                                    dapat terwujud.
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i
                                        className={
                                            classes.socials + ' fab fa-twitter'
                                        }
                                    />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i
                                        className={
                                            classes.socials +
                                            ' fab fa-instagram'
                                        }
                                    />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i
                                        className={
                                            classes.socials + ' fab fa-facebook'
                                        }
                                    />
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card plain>
                            <GridItem
                                xs={12}
                                sm={12}
                                md={6}
                                className={classes.itemGrid}
                            >
                                <img
                                    src="https://1.bp.blogspot.com/_bCYQxIvMQ2U/TQOQAXHapkI/AAAAAAAAAQw/dIjtEHBe5cc/s640/anonymous_international_black_sticker-p217501226871431885qjcl_400.jpg"
                                    alt="..."
                                    className={imageClasses}
                                />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Amam
                                <br />
                                <small className={classes.smallTitle}>
                                    Developer
                                </small>
                            </h4>
                            <CardBody>
                                <p className={classes.description}>
                                    Just a normal human being. Interested in
                                    coding.
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i
                                        className={
                                            classes.socials + ' fab fa-twitter'
                                        }
                                    />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i
                                        className={
                                            classes.socials + ' fab fa-linkedin'
                                        }
                                    />
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card plain>
                            <GridItem
                                xs={12}
                                sm={12}
                                md={6}
                                className={classes.itemGrid}
                            >
                                <img
                                    src="https://pbs.twimg.com/profile_images/961287979783241733/aFuLRGk-_400x400.jpg"
                                    alt="..."
                                    className={imageClasses}
                                />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Biki Saputra
                                <br />
                                <small className={classes.smallTitle}>
                                    Designer
                                </small>
                            </h4>
                            <CardBody>
                                <p className={classes.description}>
                                    Menyelesaikan program BSc in Multimedia
                                    Technology di Asia Pasific University dan
                                    Staffordshire University, United Kingdom.
                                    Biki saputra handal dalam mendesign website,
                                    banner, video, dan segala multimedia
                                    teknologi. menjadi salah satu media
                                    informatika di maritim muda nusantara sejak
                                    2018
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i
                                        className={
                                            classes.socials + ' fab fa-twitter'
                                        }
                                    />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i
                                        className={
                                            classes.socials +
                                            ' fab fa-instagram'
                                        }
                                    />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i
                                        className={
                                            classes.socials + ' fab fa-facebook'
                                        }
                                    />
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}
