import {
    container,
    grayColor,
    primaryColor,
    infoColor,
} from '../../maritim.jsx'
import customCheckboxRadioSwitch from '../customCheckboxRadioSwitch.jsx'

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
    relatedTitle: {
        display: 'inline-flex',
        marginBottom: '1rem',
        width: '100%',
    },
    relatedName: {
        marginTop: '0',
        padding: '0 15px',
        color: infoColor,
    },
    relatedSeparator: {
        flexGrow: 1,
        background: grayColor,
        height: '1px',
        alignSelf: 'center',
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
    relatedContainer: {
        '& img': {
            margin: 'auto',
        },
        margin: 'auto',
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
    relatedPostWrapper: {
        padding: '0 0.5rem',
    },
}

export default productDetailStyle
