import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'
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

const Wrapper = styled.div`
    margin-left: 15px;
    margin-right: 15px;

    @media screen and (max-width: 420px) {
        text-align: center;
    }
`

const innovationCategory = [
    {
        name: 'energy',
        label: 'Energi',
        path: '/energy',
    },
    {
        name: 'it',
        label: 'IT',
        path: '/it',
    },
    {
        name: 'biomedic',
        label: 'Biomedik',
        path: '/biomedic',
    },
    {
        name: 'food',
        label: 'Olah pangan',
        path: '/food',
    },
    {
        name: 'others',
        label: 'Lainnya',
        path: '/others',
    },
    {
        name: 'semua',
        label: 'Semuanya',
        path: '/semua',
    },
]

const innovationSort = [
    {
        name: 'popularity',
        label: 'Terpopuler',
    },
    {
        name: 'name',
        label: 'Abjad',
    },
]
const ProductsPage = ({ classes }) => {
    const firebase = React.useContext(FirebaseContext)
    const [selectedEnabled, setSelectedLabel] = React.useState('popularity')
    const [selectedChecked, setSelectedChecked] = React.useState([])
    const [products, setProducts] = React.useState(null)
    const [productsI, setProductsI] = React.useState(null)

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
                    }
                    ctr++
                    if (snapshots.docs.length === ctr) {
                        resolve()
                    }
                })
            })
            setProductsI(productsSnapshot)
            const urlParams = new URLSearchParams(window.location.search)

            if (urlParams.get('cat')) {
                const newSnap = [...productsSnapshot]
                const filteredSnap = newSnap.filter(function(item) {
                    return (
                        item.data.category
                            .toLowerCase()
                            .search(urlParams.get('cat')) !== -1
                    )
                })
                setProducts(filteredSnap)
            } else {
                setProducts(productsSnapshot)
            }
        })
    }, [firebase])

    const handleChangeEnabled = event => {
        const value = event.target.value

        if (value === 'name') {
            const newSnap = [...products]
            const sortedSnap = newSnap.sort((a, b) =>
                a.data.title > b.data.title
                    ? 1
                    : b.data.title > a.data.title
                    ? -1
                    : 0,
            )
            setProducts(sortedSnap)
        }
        if (value === 'popularity') {
            const newSnap = [...products]
            const sortedSnap = newSnap.sort((a, b) =>
                a.data.viewers > b.data.viewers
                    ? 1
                    : b.data.viewers > a.data.viewers
                    ? -1
                    : 0,
            )
            setProducts(sortedSnap)
        }
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

        if (newChecked.length === 0 || newChecked.includes('semua')) {
            setProducts(productsI)
        } else {
            const newSnap = [...productsI]
            const filteredSnap = newSnap.filter(function(item) {
                return newChecked.includes(item.data.category.toLowerCase())
            })
            setProducts(filteredSnap)
        }

        setSelectedChecked(newChecked)
    }

    const filterSearch = e => {
        const updatedList = productsI
        const filtered = updatedList.filter(function(item) {
            return (
                item.data.title
                    .toLowerCase()
                    .search(e.target.value.toLowerCase()) !== -1
            )
        })
        setProducts(filtered)
    }

    return (
        <Layout>
            <SEO title="products" />
            <div className={classes.productHead}>
                <GridContainer className={classes.container}>
                    <div className={classes.headerWrapper}>
                        <h1>Semua Inovasi</h1>
                        <h2>Pilih inovasi menarik berkut</h2>
                    </div>
                </GridContainer>
            </div>
            <GridContainer className={classes.container}>
                <GridItem xs={12} sm={12} md={3} className={classes.filterList}>
                    <div className={classes.filterWrapper}>
                        <Card className={classes.card}>
                            <div className={classes.cardHeader}>
                                Pilih kategori
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
                                    placeholder: 'Cari inovasi',
                                    onChange: filterSearch,
                                    inputProps: {
                                        'aria-label': 'Cari inovasi',
                                        className: classes.searchInput,
                                    },
                                }}
                            />
                            <Search className={classes.searchIcon} />
                        </GridItem>
                        {products ? (
                            products.map((product, idx) => (
                                <GridItem
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    className={classes.postWrapper}
                                    key={idx}
                                >
                                    <Wrapper>
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
                                        <div
                                            className={classes.postDescription}
                                        >
                                            <div
                                                className={classes.postCategory}
                                            >
                                                <h6>{product.data.category}</h6>
                                            </div>
                                            <h5>
                                                <Link
                                                    to={`/product-detail?pid=${product.id}`}
                                                    className={
                                                        classes.postTitle
                                                    }
                                                >
                                                    {product.data.title}
                                                </Link>
                                            </h5>
                                            <p className={classes.postExplain}>
                                                {product.data.description}
                                                <Link
                                                    to={`/product-detail?pid=${product.id}`}
                                                    className={
                                                        classes.postReadMore
                                                    }
                                                >
                                                    ...Read more
                                                </Link>
                                            </p>
                                        </div>
                                    </Wrapper>
                                </GridItem>
                            ))
                        ) : (
                            <CircularProgress
                                className={classes.circularProgress}
                                color="secondary"
                            />
                        )}
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
