
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "../../components/shared/Grid/GridContainer.jsx";
import GridItem from "../../components/shared/Grid/GridItem.jsx";
import CustomInput from "../../components/shared/CustomInput/CustomInput.jsx";
import Button from "../../components/shared/CustomButtons/Button.jsx";

import workStyle from "../../components/jss/maritim/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem cs={12} sm={12} md={8}>
                        <h2 className={classes.title}>Work with us</h2>
                        <h4 className={classes.description}>
                            Divide details about your product or agency work into parts. Write
                            a few lines about each one and contact us about any further
                            collaboration. We will responde get back to you in a couple of
                            hours.
            </h4>
                        <form>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Your Name"
                                        id="name"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Your Email"
                                        id="email"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <CustomInput
                                    labelText="Your Message"
                                    id="message"
                                    formControlProps={{
                                        fullWidth: true,
                                        className: classes.textArea
                                    }}
                                    inputProps={{
                                        multiline: true,
                                        rows: 5
                                    }}
                                />
                                <GridContainer justify="center">
                                    <GridItem
                                        xs={12}
                                        sm={12}
                                        md={4}
                                        className={classes.textCenter}
                                    >
                                        <Button color="primary">Send Message</Button>
                                    </GridItem>
                                </GridContainer>
                            </GridContainer>
                        </form>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

WorkSection.propTypes = {
    classes: PropTypes.object
};

export default withStyles(workStyle)(WorkSection);
