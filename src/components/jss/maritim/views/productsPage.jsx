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
import { container, grayColor, primaryColor } from '../../maritim.jsx'
import customCheckboxRadioSwitch from '../customCheckboxRadioSwitch.jsx'

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
    filterList: {
        '@media (max-width: 768px)': {
            display: 'none',
        },
    },
    ...customCheckboxRadioSwitch,
    postDescription: {},
    postCategory: {
        color: primaryColor,
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
        width: '100%',
        boxShadow:
            '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
        borderRadius: '6px',
        pointerEvents: 'none',
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
        boxShadow: 'inset 0 0 0 2000px rgba(255,0,150,0.3)',
    },
}

export default productsPageStyle
