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

const workStyle = {
    section: {
        marginTop: '2rem',
        marginBottom: '2rem',
        paddingBottom: '3rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        '@media (max-width: 575px)': {
            width: '100%',
        },
    },
    button: {
        width: '100%',
    },
    title: {
        ...title,
        marginBottom: '20px',
        marginTop: '10px',
        minHeight: '32px',
        textDecoration: 'none',
        textAlign: 'center',
    },
    description: {
        color: '#999',
        textAlign: 'center',
        fontSize: '1.2rem',
    },
    textCenter: {
        textAlign: 'center',
    },
    textArea: {
        margin: '15px',
    },
    fullWidth: {
        width: '100%',
    },
    circularProgress: {
        marginTop: '1rem',
    },
}

export default workStyle
