/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"

import withStyles from "@material-ui/core/styles/withStyles"

import Header from "../shared/Header/Header"
import Footer from "../shared/Footer/Footer"

import navbarsStyle from "../jss/maritim/views/componentsSections/navbarsStyle.jsx"

import HeaderLinks from "../shared/Header/HeaderLinks.jsx"

import GlobalStyle from "../theme/global"

const Layout = ({ children, classes, is_login }) => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = process.env.GATSBY_LIVE_CHAT
    script.async = true

    document.body.appendChild(script)
  })
  return (
    <>
      <GlobalStyle />
      <Header
        absolute
        color="transparent"
        brand="Maritim Muda Nasional"
        rightLinks={<HeaderLinks />}
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
        fixed
      />
      <div id="wrapper">
        <main>{children}</main>
        <Footer whiteFont={is_login ? true : false} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object,
  is_login: PropTypes.bool,
}

export default withStyles(navbarsStyle)(Layout)
