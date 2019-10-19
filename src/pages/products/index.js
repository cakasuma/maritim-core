import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import { FirebaseContext } from 'gatsby-plugin-firebase'
import GridContainer from '../../components/shared/Grid/GridContainer.jsx'
import GridItem from '../../components/shared/Grid/GridItem.jsx'
import { Link } from 'gatsby'
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

const innovationCategory = [
    {
        name: 'energy',
        label: 'Energy',
        path: '/energy',
    },
    {
        name: 'it',
        label: 'IT',
        path: '/it',
    },
    {
        name: 'biomedic',
        label: 'Biomedic',
        path: '/biomedic',
    },
    {
        name: 'food',
        label: 'Food',
        path: '/food',
    },
    {
        name: 'others',
        label: 'Others',
        path: '/others',
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
const ProductsPage = ({ classes }) => {
    const firebase = React.useContext(FirebaseContext)
    const [selectedEnabled, setSelectedLabel] = React.useState('popularity')
    const [selectedChecked, setSelectedChecked] = React.useState([])
    const [products, setProducts] = React.useState(null)

    React.useEffect(() => {
        if (!firebase) {
            return
        }
        console.log('1')

        const db = firebase.firestore()
        const query = db.collection('innovation')

        query.get().then(async snapshots => {
            const productsSnapshot = []
            await new Promise((resolve, reject) => {
                let ctr = 0
                snapshots.forEach(async doc => {
                    const productDoc = {}
                    productDoc.id = doc.id
                    productDoc.data = doc.data()

                    const user = await firebase
                        .firestore()
                        .collection('users')
                        .doc(doc.data().innovator)
                        .get()

                    if (user.exists) {
                        productDoc.data.innovator = user.data().name
                        productsSnapshot.push(productDoc)
                        console.log(productDoc)
                    }
                    ctr++
                    console.log(snapshots.docs.length)
                    console.log(ctr)
                    if (snapshots.docs.length === ctr) {
                        console.log('hi')
                        resolve()
                    }
                })
            })
            setProducts(productsSnapshot)
        })
    }, [firebase])

    const handleChangeEnabled = event => {
        const value = event.target.value
        setSelectedLabel(value)
    }
    const handleChangeCheck = label => {
        const currentIndex = selectedChecked.indexOf(label)
        const newChecked = [...selectedChecked]

        if (currentIndex === -1) {
            newChecked.push(label)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setSelectedChecked(newChecked)
    }

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
                brightness="0.7"
            >
                <GridContainer className={classes.container}>
                    <div className={classes.headerWrapper}>
                        <h1>All innovations</h1>
                        <h2>Pick your interests here</h2>
                    </div>
                </GridContainer>
            </Background>
            <GridContainer className={classes.container}>
                <GridItem xs={12} sm={6} md={3} className={classes.filterList}>
                    <div className={classes.filterWrapper}>
                        <Card className={classes.card}>
                            <div className={classes.cardHeader}>
                                Select your categories
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
                                                <Checkbox
                                                    tabIndex={-1}
                                                    checked={
                                                        selectedChecked.indexOf(
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
                                                    onClick={() =>
                                                        handleChangeCheck(
                                                            innovation.name,
                                                        )
                                                    }
                                                    classes={{
                                                        checked:
                                                            classes.checked,
                                                        root: classes.checkRoot,
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
                                                        selectedEnabled ===
                                                        innovation.name
                                                    }
                                                    onChange={
                                                        handleChangeEnabled
                                                    }
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
                        {products &&
                            products.map((product, idx) => (
                                <GridItem
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    className={classes.postWrapper}
                                    key={idx}
                                >
                                    <Link
                                        to={`/product-detail?pid=${product.id}`}
                                        className={classes.postImageWrapper}
                                    >
                                        <img
                                            src={product.data.image_1}
                                            alt="..."
                                            className={classes.postImage}
                                        />
                                    </Link>
                                    <div className={classes.postDescription}>
                                        <div className={classes.postCategory}>
                                            <h6>{product.data.category}</h6>
                                        </div>
                                        <h4 className={classes.postTitle}>
                                            <Link
                                                to={`/product-detail?pid=${product.id}`}
                                                className={
                                                    classes.postImageWrapper
                                                }
                                            >
                                                {product.data.title}
                                            </Link>
                                        </h4>
                                        <p className={classes.postExplain}>
                                            {product.data.description}
                                            <Link
                                                to={`/product-detail?pid=${product.id}`}
                                                className={
                                                    classes.postImageWrapper
                                                }
                                            >
                                                ...Read more
                                            </Link>
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

ProductsPage.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(productsPageStyle)(ProductsPage)
