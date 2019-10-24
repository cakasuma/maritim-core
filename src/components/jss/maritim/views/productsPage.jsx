import {
    container,
    grayColor,
    primaryColor,
    secondaryColor,
    infoColor,
} from '../../maritim.jsx'
import customCheckboxRadioSwitch from '../customCheckboxRadioSwitch.jsx'

import image from '../../../../images/svg/undraw-master.svg'

const productsPageStyle = {
    container: {
        ...container,
        zIndex: '2',
        position: 'relative',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        color: '#FFFFFF',
        padding: 0,
        '@media (min-width: 1200px)': {
            maxWidth: '1400px',
        },
    },
    pageHeader: {
        width: '100%',
        maxHeight: '22rem',
        paddingTop: '20vh',
        paddingBottom: '200px',
    },
    headerWrapper: {
        width: '100%',
        marginTop: '6rem',
        textAlign: 'center',
        '& h1, & h2': {
            background: secondaryColor,
            width: 'fit-content',
            margin: '1rem auto',
            padding: '1rem',
        },
    },
    card: {
        margin: '0',
        marginBottom: '2rem',
    },
    cardHeader: {
        backgroundColor: primaryColor,
        color: '#f5f5f5',
        padding: '1rem',
        fontSize: '1.1rem',
    },
    filterList: {},
    ...customCheckboxRadioSwitch,
    postDescription: {},
    postCategory: {
        color: infoColor,
    },
    postTitle: {
        color: '#3C4858',
        marginTop: '0.625rem',
        minHeight: 'auto',
        fontFamily: '"Roboto Slab", "Times New Roman", serif',
        fontWeight: 700,
        marginBottom: '0.75rem',
        textDecoration: 'none',
    },
    postExplain: {
        color: '#999',
        lineHeight: '1.5rem',
    },
    postImage: {
        maxWidth: '100%',
        width: '17rem',
        height: '12rem',
        boxShadow:
            '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
        borderRadius: '6px',
        pointerEvents: 'none',
        display: 'block',
    },
    postImageWrapper: {
        display: 'inline-block',
        color: '#3C4858',
    },
    postWrapper: {
        paddingBottom: '20px',
    },
    checked: {
        color: primaryColor + '!important',
    },
    checkedIcon: {
        width: '20px',
        height: '20px',
        border: '1px solid rgba(0, 0, 0, .54)',
        borderRadius: '3px',
    },
    uncheckedIcon: {
        width: '0px',
        height: '0px',
        padding: '9px',
        border: '1px solid rgba(0, 0, 0, .54)',
        borderRadius: '3px',
    },
    formControl: {
        width: '100%',
        paddingTop: '0',
        paddingBottom: '1rem',
    },
    searchInput: {
        fontSize: '1.5rem',
        '&,&::placeholder': {
            fontSize: '1.5rem',
            textAlign: 'center',
        },
    },
    searchWrapper: {
        position: 'relative',
    },
    searchIcon: {
        position: 'absolute',
        top: '11%',
        fill: grayColor,
        height: '1.5em',
        width: '1.5em',
        right: '0.8rem',
    },
    productHead: {
        backgroundColor: primaryColor,
        backgroundImage: 'url(' + image + ')',
    },
    circularProgress: {
        margin: 'auto',
    },
}

export default productsPageStyle
