import { container, title, dangerColor } from '../../maritim.jsx'

const submitPageStyle = {
    container: {
        zIndex: '12',
        color: '#FFFFFF',
        justifyContent: 'center',
        textAlign: 'center',
        ...container,
        '@media (min-width: 320px)': {
            maxWidth: '90%',
        },
    },
    root: {
        width: '100%',
        paddingTop: '80px',
        paddingBottom: '80px',
    },
    backButton: {
        marginRight: '1rem',
    },
    button: {
        margin: '20px 0',
    },
    instructions: {
        marginTop: '1rem',
        marginBottom: '1rem',
    },
    label: {
        margin: 'auto',
    },
    title: {
        ...title,
        display: 'inline-block',
        position: 'relative',
        marginTop: '0',
        minHeight: '32px',
        color: '#FFFFFF',
        textDecoration: 'none',
    },
    titleSecondary: {
        maxWidth: '700px',
        margin: 'auto',
    },
    title2: {
        ...title,
        display: 'inline-block',
        position: 'relative',
        marginTop: '50px',
        minHeight: '32px',
        color: '#FFFFFF',
        textDecoration: 'none',
    },
    subtitle: {
        fontSize: '1.313rem',
        maxWidth: '500px',
        margin: '10px auto 0',
    },
    error: {
        color: dangerColor,
        marginBottom: '2rem',
    },
    main: {
        background: '#FFFFFF',
        position: 'relative',
        zIndex: '3',
    },
    mainRaised: {
        margin: '-60px 30px 0px',
        borderRadius: '6px',
        boxShadow:
            '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    },
    parallax: {
        height: '400px',
    },
}

export default submitPageStyle
