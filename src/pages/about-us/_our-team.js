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
            <h2 className={classes.title}>Here is our team</h2>
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
                                    src={team1}
                                    alt="..."
                                    className={imageClasses}
                                />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Taylol Swipe
                                <br />
                                <small className={classes.smallTitle}>
                                    Model
                                </small>
                            </h4>
                            <CardBody>
                                <p className={classes.description}>
                                    You can write here details about one of your
                                    team members. You can give more details
                                    about what they do. Feel free to add some{' '}
                                    <a href="#pablo">links</a> for people to be
                                    able to follow them outside the site.
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
                                    src={team2}
                                    alt="..."
                                    className={imageClasses}
                                />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Cakasuma
                                <br />
                                <small className={classes.smallTitle}>
                                    Developer
                                </small>
                            </h4>
                            <CardBody>
                                <p className={classes.description}>
                                    You can write here details about one of your
                                    team members. You can give more details
                                    about what they do. Feel free to add some{' '}
                                    <a href="#pablo">links</a> for people to be
                                    able to follow them outside the site.
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
                                    src={team3}
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
                                    You can write here details about one of your
                                    team members. You can give more details
                                    about what they do. Feel free to add some{' '}
                                    <a href="#pablo">links</a> for people to be
                                    able to follow them outside the site.
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
