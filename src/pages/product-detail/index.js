import React from 'react'

import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'

import productsDetailStyle from '../../components/jss/maritim/views/productDetailPage.jsx'

import Layout from '../../components/layout/layout.js'
import SEO from '../../components/layout/seo.js'

class ProductDetail extends React.Component {
    state = {}
    render() {
        const { classes } = this.props
        return (
            <Layout>
                <SEO title="product detail" />
                <div className={classes.header}></div>
            </Layout>
        )
    }
}

export default withStyles(productsDetailStyle)(ProductDetail)
