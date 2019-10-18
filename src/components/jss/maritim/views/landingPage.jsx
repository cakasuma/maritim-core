import { container, title } from '../../maritim.jsx'

const landingPageStyle = {
    '@keyframes typing': {
        from: { width: 0 },
        to: { width: '100%' },
    },
    '@keyframes blink': {
        from: { borderColor: 'transparent' },
        '50%': { borderColor: 'orange' },
        to: { borderColor: 'transparent' },
    },
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
    parallax: {
        height: '700px',
    },
    title: {
        ...title,
        display: 'inline-block',
        position: 'relative',
        marginTop: '0',
        fontSize: '9rem',
        color: '#FFFFFF',
        textDecoration: 'none',
    },
    titleAnimation: {
        ...title,
        display: 'inline-block',
        position: 'relative',
        fontSize: '9rem',
        color: '#FFFFFF',
        textDecoration: 'none',
        overflow:
            'hidden' /* Ensures the content is not revealed until the animation */,
        borderRight: '0.15em solid orange' /* The typwriter cursor */,
        whiteSpace: 'nowrap' /* Keeps the content on a single line */,
        margin:
            '1rem auto' /* Gives that scrolling effect as the typing happens */,
        letterSpacing: '0.1em' /* Adjust as needed */,
        animation: '$typing 2.5s steps(30, end), $blink 1s step-end infinite',
    },
    separator: {
        margin: '1rem auto',
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
}

export default landingPageStyle
