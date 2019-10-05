import { createGlobalStyle } from 'styled-components'
import Reset from './reset'

const GlobalStyle = createGlobalStyle`
    ${Reset}

    html {
        height: 100%;
        font-size: 100%; /* 1rem = 10px */

        @media (min-width: 1980px) {
            font-size: 120%; /* 1rem = 12px */
        }
        @media (max-width: 992px) {
            font-size: 75%; /* 1rem = 8px */
        }
        @media (max-width: 660px) {
            font-size: 65%; /* 1rem = 8px */
        }
    }
`

export default GlobalStyle
