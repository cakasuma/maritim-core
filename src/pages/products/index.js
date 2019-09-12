import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'
import Button from '../../components/shared/CustomButtons/Button.jsx'
// @material-ui/icons
import Card from '../../components/shared/Card/Card.jsx'
import CardBody from '../../components/shared/Card/CardBody.jsx'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import FiberManualRecord from '@material-ui/icons/FiberManualRecord'

import Parallax from '../../components/shared/Parallax/Parallax.jsx'

import productsPageStyle from '../../components/jss/maritim/views/productsPage.jsx'

import Layout from '../../components/layout/layout.js'
import SEO from '../../components/layout/seo.js'
import image from '../../images/faces/avatar.jpg'

const innovationCategory = [
    {
        name: 'pangan',
        label: 'Pangan',
        path: '/pangan',
    },
    {
        name: 'energi',
        label: 'Energi',
        path: '/energi',
    },
    {
        name: 'tik',
        label: 'TIK',
        path: '/tik',
    },
    {
        name: 'material',
        label: 'Material Maju',
        path: '/material',
    },
    {
        name: 'lainnya',
        label: 'Lainnya',
        path: '/lainnya',
    },
]
class ProductsPage extends React.Component {
    state = {
        selectedEnabled: 'pangan',
    }

    handleChangeEnabled(event) {
        const value = event.target.value
        this.setState({ selectedEnabled: value })
    }
    render() {
        const { classes } = this.props
        return (
            <Layout>
                <SEO title="products" />
                <Parallax
                    filter
                    image={require('../../images/landing-bg.jpg')}
                    className={classes.pageHeader}
                >
                    <GridContainer className={classes.container}>
                        <div className={classes.headerWrapper}>
                            <h1>All innovations</h1>
                            <h2>Pick your interests here</h2>
                        </div>
                    </GridContainer>
                </Parallax>
                <GridContainer className={classes.container}>
                    <GridItem
                        xs={12}
                        sm={6}
                        md={3}
                        className={classes.filterList}
                    >
                        <Card className={classes.card}>
                            <div className={classes.cardHeader}>
                                Filter list
                            </div>
                            <CardBody>
                                {innovationCategory.map((innovation, idx) => (
                                    <div
                                        className={
                                            classes.checkboxAndRadio +
                                            ' ' +
                                            classes.checkboxAndRadioHorizontal
                                        }
                                        key={idx}
                                    >
                                        <FormControlLabel
                                            control={
                                                <Radio
                                                    checked={
                                                        this.state
                                                            .selectedEnabled ===
                                                        innovation.name
                                                    }
                                                    onChange={this.handleChangeEnabled.bind(
                                                        this,
                                                    )}
                                                    value={innovation.name}
                                                    name="radio button enabled"
                                                    aria-label="A"
                                                    icon={
                                                        <FiberManualRecord
                                                            className={
                                                                classes.radioUnchecked
                                                            }
                                                        />
                                                    }
                                                    checkedIcon={
                                                        <FiberManualRecord
                                                            className={
                                                                classes.radioChecked
                                                            }
                                                        />
                                                    }
                                                    classes={{
                                                        checked: classes.radio,
                                                        root: classes.radioRoot,
                                                    }}
                                                />
                                            }
                                            classes={{
                                                label: classes.label,
                                                root: classes.labelRoot,
                                            }}
                                            label={innovation.label}
                                        />
                                    </div>
                                ))}
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={9}>
                        <GridContainer>
                            {new Array(6).fill(6).map((em, idx) => (
                                <GridItem
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    className={classes.postWrapper}
                                    key={idx}
                                >
                                    <a href="#">
                                        <img
                                            src={image}
                                            alt="..."
                                            className={classes.postImage}
                                        />
                                    </a>
                                    <div className={classes.postDescription}>
                                        <div className={classes.postCategory}>
                                            <h6>Pangan</h6>
                                        </div>
                                        <h4 className={classes.postTitle}>
                                            <a href="#">
                                                Autodesk look into the future
                                            </a>
                                        </h4>
                                        <p className={classes.postExplain}>
                                            alksdfjalskdfj jlskdjflskdf j sdlkf
                                            jlskd <a href="#">...Read more</a>
                                        </p>
                                    </div>
                                </GridItem>
                            ))}
                        </GridContainer>
                    </GridItem>
                </GridContainer>
            </Layout>
        )
    }
}

ProductsPage.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(productsPageStyle)(ProductsPage)
