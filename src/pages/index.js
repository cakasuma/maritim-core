import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "../components/shared/Grid/GridContainer.jsx";
import GridItem from "../components/shared/Grid/GridItem.jsx";
import Button from "../components/shared/CustomButtons/Button.jsx";
import Parallax from "../components/shared/Parallax/Parallax.jsx";

import landingPageStyle from "../components/jss/maritim/views/landingPage.jsx";

import ProductSection from "./home/_product-section.js";
import WorkSection from "./home/_work-section.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const IndexPage = ({ classes }) => (
	<Layout>
		<SEO title="Home" />
		<div>

			<Parallax filter image={require("../images/landing-bg.jpg")}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={12} md={6}>
							<h1 className={classes.title}>Your Innovations Starts With Us.</h1>
							<h4>
								We publish your innovation to help investor peek at your innovation and communicate with you.
								We believe Indonesia is a country full of inventor and it will help its glory because of you too!.
                			</h4>
							<br />
							<Button
								color="danger"
								size="lg"
								href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faLightbulb} />
								Peek all innovation
                </Button>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<ProductSection />
					<WorkSection />
				</div>
			</div>
		</div>
	</Layout >
)

IndexPage.propTypes = {
	classes: PropTypes.object
};

export default withStyles(landingPageStyle)(IndexPage);