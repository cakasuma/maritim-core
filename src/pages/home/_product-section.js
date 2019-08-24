import React from "react"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons

// core components
import GridContainer from "../../components/shared/Grid/GridContainer.jsx"
import GridItem from "../../components/shared/Grid/GridItem.jsx"

import productStyle from "../../components/jss/maritim/views/landingPageSections/productStyle.jsx"
import image from "../../images/faces/avatar.jpg"

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Innovation overview</h2>
            <h5 className={classes.description}>
              These are the most popular posted in our platform
            </h5>
          </GridItem>
        </GridContainer>
        <div className={classes.card}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={5} md={5} className={classes.cardWrapper}>
              <a href="#">
                <img src={image} alt="..." className={classes.cardImage} />
              </a>
            </GridItem>
            <GridItem xs={12} sm={7} md={7} className={classes.cardWrapper}>
              <div className={classes.cardCategoryWrapper}>
                <h6 className={classes.cardCategory}>Category name</h6>
              </div>
              <a href="#">
                <h3 className={classes.cardTitle}>
                  Card title Autodesk look to the future by using 3d printing.
                  will be very good to other organization
                </h3>
              </a>
              <p className={classes.cardDescription}>
                kontol kontol memek babi kampang memek kontol kimak babi burit
                kontol biji <a href="#">...Read more</a>
              </p>
              <p className={classes.cardAuthor}>
                By{" "}
                <a href="#">
                  <b>Cakasuma</b>
                </a>{" "}
                2 days ago
              </p>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.card}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={5} md={5} className={classes.cardWrapper}>
              <a href="#">
                <img src={image} alt="..." className={classes.cardImage} />
              </a>
            </GridItem>
            <GridItem xs={12} sm={7} md={7} className={classes.cardWrapper}>
              <div className={classes.cardCategoryWrapper}>
                <h6 className={classes.cardCategory}>Category name</h6>
              </div>
              <a href="#">
                <h3 className={classes.cardTitle}>
                  Card title Autodesk look to the future by using 3d printing.
                  will be very good to other organization
                </h3>
              </a>
              <p className={classes.cardDescription}>
                kontol kontol memek babi kampang memek kontol kimak babi burit
                kontol biji <a href="#">...Read more</a>
              </p>
              <p className={classes.cardAuthor}>
                By{" "}
                <a href="#">
                  <b>Cakasuma</b>
                </a>{" "}
                2 days ago
              </p>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.card}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={5} md={5} className={classes.cardWrapper}>
              <a href="#">
                <img src={image} alt="..." className={classes.cardImage} />
              </a>
            </GridItem>
            <GridItem xs={12} sm={7} md={7} className={classes.cardWrapper}>
              <div className={classes.cardCategoryWrapper}>
                <h6 className={classes.cardCategory}>Category name</h6>
              </div>
              <a href="#">
                <h3 className={classes.cardTitle}>
                  Card title Autodesk look to the future by using 3d printing.
                  will be very good to other organization
                </h3>
              </a>
              <p className={classes.cardDescription}>
                kontol kontol memek babi kampang memek kontol kimak babi burit
                kontol biji <a href="#">...Read more</a>
              </p>
              <p className={classes.cardAuthor}>
                By{" "}
                <a href="#">
                  <b>Cakasuma</b>
                </a>{" "}
                2 days ago
              </p>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

ProductSection.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(productStyle)(ProductSection)
