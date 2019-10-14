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
import { title } from '../../../maritim.jsx'

const productStyle = {
    section: {
        textAlign: 'center',
        width: '83%',
        marginTop: '2rem',
        marginBottom: '2rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        '@media (max-width: 575px)': {
            width: '100%',
        },
    },
    card: {
        marginTop: '50px',
        marginBottom: '50px',
        margin: 'auto',
    },
    separator: {
        marginTop: '90px',
    },
    title2: {
        ...title,
        display: 'inline-block',
        position: 'relative',
        marginTop: '50px',
        minHeight: '32px',
        textDecoration: 'none',
    },
    cardWrapper: {
        width: '100%',
        position: 'relative',
        minHeight: '1px',
        padding: '10px',
        textAlign: 'left',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    cardImage: {
        width: '100%',
        boxShadow:
            '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
        borderRadius: '6px',
        pointerEvents: 'none',
        maxWidth: '320px',
        display: 'block',
    },
    cardImageWrapper: {
        display: 'inline-block',
    },
    cardCategoryWrapper: {
        color: '#00acc1',
        display: 'inline-block',
    },
    cardCategory: {
        marginTop: '10px',
        marginBottom: 0,
    },
    cardTitle: {
        color: '#3C4858',
        marginTop: '0.625rem',
        minHeight: 'auto',
        fontFamily: '"Roboto Slab", "Times New Roman", serif',
        fontWeight: 700,
        marginBottom: '0.75rem',
        textDecoration: 'none',
    },
    cardReverse: {
        flexWrap: 'wrap-reverse',
    },
    cardDescription: {
        color: '#999',
        lineHeight: '1.5rem',
    },
    cardAuthor: {
        fontSize: '14px',
        margin: '0 0 10px',
        color: '#3c4858',
    },
    title: {
        ...title,
        marginBottom: '1rem',
        marginTop: '60px',
        minHeight: '32px',
        textDecoration: 'none',
    },
    description: {
        color: '#999',
    },
}

export default productStyle
