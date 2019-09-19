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
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const productDetailStyle = {
    container: {
        ...container,
        zIndex: '2',
        position: 'relative',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        padding: 0,
    },
    navWrapper: {
        margin: '20px auto 50px auto',
    },
    sliderContainer: {
        '& .slick-arrow': {
            zIndex: '3',
            '&.slick-prev': {
                left: '8px',
            },
            '&.slick-next': {
                right: '8px',
            },
        },
    },
    contactButton: {
        margin: 'auto',
        width: '100%',
    },
    pageHeader: {
        width: '100%',
        maxHeight: '15rem',
        paddingTop: '15vh',
        paddingBottom: '200px',
    },
    headerWrapper: {
        width: '100%',
        marginTop: '1rem',
        textAlign: 'center',
        color: '#ffffff',
    },
    card: {
        margin: '0',
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
}

export default productDetailStyle
