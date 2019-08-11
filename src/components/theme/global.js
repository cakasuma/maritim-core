import { createGlobalStyle } from 'styled-components'
import Reset from './reset'

const GlobalStyle = createGlobalStyle`
    ${Reset}

    div {
        font-weight: 300;
    }


`

export default GlobalStyle
