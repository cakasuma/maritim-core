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
import { container, title } from '../../maritim.jsx'

const myIdeaPageStyle = {
    container: {
        zIndex: '12',
        color: '#FFFFFF',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#000000',
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
    titleDescription: {
        width: '100%',
        fontSize: '16px',
        color: '#fff',
        textTransform: 'none',
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
        minHeight: '600px',
        boxShadow:
            '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    },
    parallax: {
        height: '400px',
    },
    unavailable: {
        color: 'black',
        width: '100%',
        height: '100%',
        marginTop: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
}

export default myIdeaPageStyle
