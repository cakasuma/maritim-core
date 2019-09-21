import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import { FirebaseContext } from 'gatsby-plugin-firebase'

// @material-ui/icons

// core components
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'
import CustomInput from '../../components/shared/CustomInput/CustomInput.jsx'
import Button from '../../components/shared/CustomButtons/Button.jsx'
import InfoArea from '../../components/shared/InfoArea/InfoArea.jsx'

import PinDrop from '@material-ui/icons/PinDrop'
import Phone from '@material-ui/icons/Phone'
import BusinessCenter from '@material-ui/icons/BusinessCenter'

import feedbackStyle from '../../components/jss/maritim/views/landingPageSections/feedbackStyle.jsx'

const FeedbackSection = ({ classes }) => {
    const firebase = React.useContext(FirebaseContext)
    return (
        <div className={classes.section}>
            <GridContainer className={classes.container} justify="center">
                <GridItem xs={11} sm={11} md={11}>
                    <h2 className={classes.title}>Send us a message</h2>
                    <GridContainer>
                        <GridItem sm={6} md={6} className={classes.noPadding}>
                            <p className={classes.description}>
                                You can contact us with anything to our
                                services. We'll get in touch with you as soon as
                                possible
                                <br />
                                <br />
                            </p>
                            <form action="/about-us">
                                <CustomInput
                                    labelText="Your Name"
                                    id="name"
                                    inputProps={{
                                        name: 'name',
                                    }}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                />
                                <CustomInput
                                    labelText="Your Name"
                                    id="name"
                                    inputProps={{
                                        name: 'name',
                                    }}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                />
                                <CustomInput
                                    labelText="Your Name"
                                    id="name"
                                    inputProps={{
                                        name: 'name',
                                    }}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                />
                                <CustomInput
                                    labelText="Describe a little bit about you"
                                    id="message"
                                    inputProps={{
                                        name: 'message',
                                        multiline: true,
                                        rows: 5,
                                    }}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                />
                                <Button type="submit" color="primary">
                                    Contact us
                                </Button>
                            </form>
                        </GridItem>
                        <GridItem md={4} sm={4} className={classes.mlAuto}>
                            <InfoArea
                                className={classes.infoAreaWrapper}
                                title="Find us at the office"
                                description={
                                    <p>
                                        Bld Mihail Kogalniceanu, nr. 8, <br />{' '}
                                        7652 Bucharest, <br /> Romania
                                    </p>
                                }
                                icon={PinDrop}
                                iconColor="primary"
                            />
                            <InfoArea
                                className={classes.infoAreaWrapper}
                                title="Give us a ring"
                                description={
                                    <p>
                                        Michael Jordan <br /> +40 762 321 762{' '}
                                        <br /> Mon - Fri, 8:00-22:00
                                    </p>
                                }
                                icon={Phone}
                                iconColor="primary"
                            />
                            <InfoArea
                                className={classes.infoAreaWrapper}
                                title="Legal Information"
                                description={
                                    <p>
                                        Creative Tim Ltd. <br /> VAT · EN2341241{' '}
                                        <br /> IBAN · EN8732ENGB2300099123{' '}
                                        <br /> Bank · Great Britain Bank
                                    </p>
                                }
                                icon={BusinessCenter}
                                iconColor="primary"
                            />
                        </GridItem>
                    </GridContainer>
                </GridItem>
            </GridContainer>
        </div>
    )
}

FeedbackSection.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(feedbackStyle)(FeedbackSection)
