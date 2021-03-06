import { createGlobalStyle } from 'styled-components'
import Reset from './reset'

const GlobalStyle = createGlobalStyle`
    ${Reset}

    html {
        height: 100%;
        font-size: 85%; /* 1rem = 10px */

        @media (min-width: 1980px) {
            font-size: 100%; /* 1rem = 12px */
        }
        @media (max-width: 992px) {
            font-size: 76%; /* 1rem = 8px */
        }
        @media (max-width: 660px) {
            font-size: 70%; /* 1rem = 8px */
        }
        @media (max-width: 400px) {
            font-size: 66%; /* 1rem = 8px */
        }
    }
`

export default GlobalStyle
