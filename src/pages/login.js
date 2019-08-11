/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import LockOutlined from "@material-ui/icons/LockOutlined";
// core components
import GridContainer from "../components/shared/Grid/GridContainer.jsx";
import GridItem from "../components/shared/Grid/GridItem.jsx";
import Button from "../components/shared/CustomButtons/Button.jsx";
import Card from "../components/shared/Card/Card.jsx";
import CardBody from "../components/shared/Card/CardBody.jsx";
import CardHeader from "../components/shared/Card/CardHeader.jsx";
import CardFooter from "../components/shared/Card/CardFooter.jsx";
import CustomInput from "../components/shared/CustomInput/CustomInput.jsx";

import loginPageStyle from "../components/jss/maritim/views/loginPage.jsx";

import Layout from '../components/layout/layout.js'
import SEO from '../components/layout/seo.js'

import Background from "../components/shared/Image/background";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardAnimaton: "cardHidden"
        };
    }
    componentDidMount() {
        // we add a hidden class to the card and after 700 ms we delete it and the transition appears
        setTimeout(
            function () {
                this.setState({ cardAnimaton: "" });
            }.bind(this),
            100
        );
    }
    render() {
        const { classes } = this.props;
        return (
            <Layout is_login>
                <SEO title='login' />
                <Background
                    className={classes.pageHeader}
                    style={{
                        backgroundSize: "cover",
                        backgroundPosition: "top center"
                    }}
                    img_name='bg-main.png'
                >
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                                <Card className={classes[this.state.cardAnimaton]}>
                                    <form className={classes.form}>
                                        <CardHeader color="primary" className={classes.cardHeader}>
                                            <h4>Login</h4>
                                            <div className={classes.socialLine}>
                                                <Button
                                                    justIcon
                                                    href="#pablo"
                                                    target="_blank"
                                                    color="transparent"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <FontAwesomeIcon icon={faTwitter} />
                                                </Button>
                                                <Button
                                                    justIcon
                                                    href="#pablo"
                                                    target="_blank"
                                                    color="transparent"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <FontAwesomeIcon icon={faFacebook} />
                                                </Button>
                                                <Button
                                                    justIcon
                                                    href="#pablo"
                                                    target="_blank"
                                                    color="transparent"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <FontAwesomeIcon icon={faGooglePlusG} />
                                                </Button>
                                            </div>
                                        </CardHeader>
                                        <p className={classes.divider}>Or Be Classical</p>
                                        <CardBody>
                                            <CustomInput
                                                labelText="First Name..."
                                                id="first"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <People className={classes.inputIconsColor} />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                            <CustomInput
                                                labelText="Email..."
                                                id="email"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "email",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Email className={classes.inputIconsColor} />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                            <CustomInput
                                                labelText="Password"
                                                id="pass"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "password",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <LockOutlined className={classes.inputIconsColor} />
                                                        </InputAdornment>
                                                    ),
                                                    autoComplete: "off"
                                                }}
                                            />
                                        </CardBody>
                                        <CardFooter className={classes.cardFooter}>
                                            <Button simple color="primary" size="lg">
                                                Get started
                      </Button>
                                        </CardFooter>
                                    </form>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Background>
            </Layout>
        );
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object
};

export default withStyles(loginPageStyle)(LoginPage);
