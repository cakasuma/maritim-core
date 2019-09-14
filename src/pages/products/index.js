import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'
import Button from '../../components/shared/CustomButtons/Button.jsx'
// @material-ui/icons
import { Search } from '@material-ui/icons'
import Card from '../../components/shared/Card/Card.jsx'
import CardBody from '../../components/shared/Card/CardBody.jsx'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import Checkbox from '@material-ui/core/Checkbox'
import Check from '@material-ui/icons/Check'
import FiberManualRecord from '@material-ui/icons/FiberManualRecord'
import CustomInput from '../../components/shared/CustomInput/CustomInput.jsx'

import productsPageStyle from '../../components/jss/maritim/views/productsPage.jsx'
import Background from '../../components/shared/Image/background'

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

const innovationSort = [
    {
        name: 'popularity',
        label: 'Popularity',
    },
    {
        name: 'name',
        label: 'Name',
    },
]
class ProductsPage extends React.Component {
    state = {
        selectedEnabled: 'popularity',
        selectedChecked: [],
    }

    handleChangeEnabled(event) {
        const value = event.target.value
        this.setState({ selectedEnabled: value })
    }
    handleChangeCheck(label) {
        const { selectedChecked } = this.state
        const currentIndex = selectedChecked.indexOf(label)
        const newChecked = [...selectedChecked]

        if (currentIndex === -1) {
            newChecked.push(label)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        this.setState({
            selectedChecked: newChecked,
        })
    }

    render() {
        const { classes } = this.props
        return (
            <Layout>
                <SEO title="products" />
                <Background
                    className={classes.productHead}
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    img_name="landing-bg.jpg"
                >
                    <GridContainer className={classes.container}>
                        <div className={classes.headerWrapper}>
                            <h1>All innovations</h1>
                            <h2>Pick your interests here</h2>
                        </div>
                    </GridContainer>
                </Background>
                <GridContainer className={classes.container}>
                    <GridItem
                        xs={12}
                        sm={6}
                        md={3}
                        className={classes.filterList}
                    >
                        <div className={classes.filterWrapper}>
                            <Card className={classes.card}>
                                <div className={classes.cardHeader}>
                                    Select your categories
                                </div>
                                <CardBody>
                                    {innovationCategory.map(
                                        (innovation, idx) => (
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
                                                        <Checkbox
                                                            tabIndex={-1}
                                                            checked={
                                                                this.state.selectedChecked.indexOf(
                                                                    innovation.name,
                                                                ) !== -1
                                                                    ? true
                                                                    : false
                                                            }
                                                            checkedIcon={
                                                                <Check
                                                                    className={
                                                                        classes.checkedIcon
                                                                    }
                                                                />
                                                            }
                                                            icon={
                                                                <Check
                                                                    className={
                                                                        classes.uncheckedIcon
                                                                    }
                                                                />
                                                            }
                                                            onClick={this.handleChangeCheck.bind(
                                                                this,
                                                                innovation.name,
                                                            )}
                                                            classes={{
                                                                checked:
                                                                    classes.checked,
                                                                root:
                                                                    classes.checkRoot,
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
                                        ),
                                    )}
                                </CardBody>
                            </Card>
                            <Card className={classes.card}>
                                <div className={classes.cardHeader}>Filter</div>
                                <CardBody>
                                    {innovationSort.map((innovation, idx) => (
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
                                                            checked:
                                                                classes.radio,
                                                            root:
                                                                classes.radioRoot,
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
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={9}>
                        <GridContainer>
                            <GridItem
                                xs={12}
                                sm={12}
                                md={12}
                                className={classes.searchWrapper}
                            >
                                <CustomInput
                                    inputRootCustomClasses={
                                        classes.inputRootCustomClasses
                                    }
                                    formControlProps={{
                                        className: classes.formControl,
                                    }}
                                    inputProps={{
                                        placeholder: 'Search innovation',
                                        inputProps: {
                                            'aria-label': 'Search innovation',
                                            className: classes.searchInput,
                                        },
                                    }}
                                />
                                <Search className={classes.searchIcon} />
                            </GridItem>
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
