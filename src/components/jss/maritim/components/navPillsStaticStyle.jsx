import {
    roseColor,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
} from '../../maritim.jsx'

const navPillsStyle = theme => ({
    root: {
        marginTop: '20px',
        paddingLeft: '0',
        marginBottom: '0',
        overflow: 'visible !important',
        lineHeight: '24px',
        textTransform: 'uppercase',
        fontSize: '12px',
        fontWeight: '500',
        position: 'relative',
        display: 'block',
        color: 'inherit',
    },
    flexContainer: {
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexWrap: 'wrap',
        },
    },
    displayNone: {
        display: 'none !important',
    },
    fixed: {
        overflow: 'visible !important',
    },
    horizontalDisplay: {
        display: 'block',
    },
    pills: {
        float: 'left',
        position: 'relative',
        display: 'block',
        borderRadius: '30px',
        minWidth: '100px',
        textAlign: 'center',
        transition: 'all .3s',
        padding: '10px 15px',
        color: '#555555',
        height: 'auto',
        opacity: '1',
        maxWidth: '100%',
        margin: '0 2rem',
        '@media (max-width: 768px)': {
            margin: '0 1rem',
        },
        '@media (max-width: 425px)': {
            margin: '1rem 1rem',
        },
        '@media (max-width: 375px)': {
            margin: '1rem 0.5rem',
        },
    },
    pillsWithIcons: {
        borderRadius: '4px',
    },
    tabIcon: {
        width: '30px',
        height: '30px',
        display: 'block',
        margin: '15px 0 !important',
        '&, & *': {
            letterSpacing: 'normal !important',
        },
    },
    horizontalPills: {
        width: '100%',
        float: 'none !important',
        '& + button': {
            margin: '10px 0',
        },
    },
    contentWrapper: {
        marginTop: '20px',
    },
    primary: {
        '&': {
            color: '#FFFFFF',
            backgroundColor: primaryColor,
        },
        '&:hover': {
            boxShadow:
                '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)',
        },
    },
    info: {
        '&': {
            color: '#FFFFFF',
            backgroundColor: infoColor,
        },
        '&:hover': {
            boxShadow:
                '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)',
        },
    },
    success: {
        '&': {
            color: '#FFFFFF',
            backgroundColor: successColor,
        },
        '&:hover': {
            boxShadow:
                '0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)',
        },
    },
    warning: {
        '&': {
            color: '#FFFFFF',
            backgroundColor: warningColor,
        },
        '&:hover': {
            boxShadow:
                '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)',
        },
    },
    danger: {
        '&': {
            color: '#FFFFFF',
            backgroundColor: dangerColor,
        },
        '&:hover': {
            boxShadow:
                '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)',
        },
    },
    rose: {
        '&': {
            color: '#FFFFFF',
            backgroundColor: roseColor,
        },
        '&:hover': {
            boxShadow:
                '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)',
        },
    },
    alignCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabWrapper: {
        color: 'inherit',
        position: 'relative',
        fontSize: '12px',
        lineHeight: '24px',
        fontWeight: '500',
        textTransform: 'uppercase',
        '&,& *': {
            letterSpacing: 'normal',
        },
    },
})

export default navPillsStyle
