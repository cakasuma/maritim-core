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
/*eslint-disable*/
import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// nodejs library that concatenates classes
import classNames from 'classnames'
import { List, ListItem, withStyles } from '@material-ui/core'

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'

import footerStyle from '../../jss/maritim/components/footerStyle.jsx'

function Footer({ ...props }) {
    const { classes, whiteFont } = props
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont,
    })
    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont,
    })
    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="https://www.maritimmuda.id"
                                className={classes.block}
                                target="_blank"
                            >
                                Maritim muda nasional
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <Link to="/about-us" className={classes.block}>
                                About us
                            </Link>
                        </ListItem>
                    </List>
                </div>
                <div className={classes.right}>
                    &copy; {1900 + new Date().getYear()} , made with{' '}
                    <Favorite className={classes.icon} /> by{' '}
                    <a
                        href="https://www.maritimmuda.id"
                        className={aClasses}
                        target="_blank"
                    >
                        Maritim muda
                    </a>{' '}
                    for a better Indonesia.
                </div>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
    whiteFont: PropTypes.bool,
}

export default withStyles(footerStyle)(Footer)
