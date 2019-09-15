import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'gatsby'

// @material-ui/icons

// core components
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'

import productStyle from '../../components/jss/maritim/views/landingPageSections/productStyle.jsx'
import image from '../../images/faces/avatar.jpg'

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
                {new Array(3).fill(3).map((em, idx) => {
                    if (idx % 2 !== 0) {
                        return (
                            <div className={classes.card}>
                                <GridContainer justify="center">
                                    <GridItem
                                        xs={12}
                                        sm={5}
                                        md={5}
                                        className={classes.cardWrapper}
                                    >
                                        <Link
                                            to="/product-detail"
                                            className={classes.cardImageWrapper}
                                        >
                                            <img
                                                src={image}
                                                alt="..."
                                                className={classes.cardImage}
                                            />
                                        </Link>
                                    </GridItem>
                                    <GridItem
                                        xs={12}
                                        sm={7}
                                        md={7}
                                        className={classes.cardWrapper}
                                    >
                                        <div
                                            className={
                                                classes.cardCategoryWrapper
                                            }
                                        >
                                            <h6
                                                className={classes.cardCategory}
                                            >
                                                Category name
                                            </h6>
                                        </div>
                                        <Link
                                            to="/product-detail"
                                            className={classes.cardImageWrapper}
                                        >
                                            <h3 className={classes.cardTitle}>
                                                Card title Autodesk look to the
                                                future by using 3d printing.
                                                will be very good to other
                                                organization
                                            </h3>
                                        </Link>
                                        <p className={classes.cardDescription}>
                                            lsdjfs lskdjf skldjf lksdjf lksd
                                            fjlskdfj lksdf jksldfj skldf jslkdf
                                            jslkdf jslkdf sjkldf
                                            <Link
                                                to="/product-detail"
                                                className={
                                                    classes.cardImageWrapper
                                                }
                                            >
                                                ...Read more
                                            </Link>
                                        </p>
                                        <p className={classes.cardAuthor}>
                                            By{' '}
                                            <Link
                                                to="/product-detail"
                                                className={
                                                    classes.cardImageWrapper
                                                }
                                            >
                                                <b>Cakasuma</b>
                                            </Link>{' '}
                                            2 days ago
                                        </p>
                                    </GridItem>
                                </GridContainer>
                            </div>
                        )
                    } else {
                        return (
                            <div className={classes.card}>
                                <GridContainer
                                    justify="center"
                                    className={classes.cardReverse}
                                >
                                    <GridItem
                                        xs={12}
                                        sm={7}
                                        md={7}
                                        className={classes.cardWrapper}
                                    >
                                        <div
                                            className={
                                                classes.cardCategoryWrapper
                                            }
                                        >
                                            <h6
                                                className={classes.cardCategory}
                                            >
                                                Category name
                                            </h6>
                                        </div>
                                        <Link
                                            to="/product-detail"
                                            className={classes.cardImageWrapper}
                                        >
                                            <h3 className={classes.cardTitle}>
                                                Card title Autodesk look to the
                                                future by using 3d printing.
                                                will be very good to other
                                                organization
                                            </h3>
                                        </Link>
                                        <p className={classes.cardDescription}>
                                            lsdjfs lskdjf skldjf lksdjf lksd
                                            fjlskdfj lksdf jksldfj skldf jslkdf
                                            jslkdf jslkdf sjkldf
                                            <Link
                                                to="/product-detail"
                                                className={
                                                    classes.cardImageWrapper
                                                }
                                            >
                                                ...Read more
                                            </Link>
                                        </p>
                                        <p className={classes.cardAuthor}>
                                            By{' '}
                                            <Link
                                                to="/product-detail"
                                                className={
                                                    classes.cardImageWrapper
                                                }
                                            >
                                                <b>Cakasuma</b>
                                            </Link>{' '}
                                            2 days ago
                                        </p>
                                    </GridItem>
                                    <GridItem
                                        xs={12}
                                        sm={5}
                                        md={5}
                                        className={classes.cardWrapper}
                                    >
                                        <Link
                                            to="/product-detail"
                                            className={classes.cardImageWrapper}
                                        >
                                            <img
                                                src={image}
                                                alt="..."
                                                className={classes.cardImage}
                                            />
                                        </Link>
                                    </GridItem>
                                </GridContainer>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

ProductSection.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(productStyle)(ProductSection)
