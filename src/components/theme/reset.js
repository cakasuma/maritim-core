import { css } from 'styled-components'

const Reset = css`
    /* http://meyerweb.com/eric/tools/css/reset/
        v4.0 | 20180602
        License: none (public domain)
    */
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: 'Roboto', sans-serif !important;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    section {
        display: block;
    }

    /* HTML5 hidden-attribute fix for newer browsers */
    *[hidden] {
        display: none;
    }
    body {
        line-height: 1;
    }
    ol,
    ul {
        list-style: none;
    }
    blockquote,
    q {
        quotes: none;
    }
    blockquote::before,
    blockquote::after,
    q::before,
    q::after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    html * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; }

    body {
    font-size: 1rem; }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 300;
    line-height: 1.5em; }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    color: inherit; }

    h1,
    h2,
    h3 {
    margin-top: 20px;
    margin-bottom: 10px; }

    h4,
    h5,
    h6 {
    margin-top: 10px;
    margin-bottom: 10px; }

    h1 {
    font-size: 3rem;
    line-height: 1.15em; }

    h2 {
    font-size: 2.25rem;
    line-height: 1.5em; }

    h3 {
    font-size: 1.5625rem;
    line-height: 1.4em; }

    h4 {
    font-size: 1rem;
    line-height: 1.5em; }

    h5 {
    font-size: 1.0625rem;
    line-height: 1.55em; }

    h6 {
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: 500; }

    p {
    font-size: 14px;
    margin: 0 0 10px; }

    html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent; }

    body {
    background-color: #e5e5e5;
    color: #3c4858;
    margin: 0;
    font-size: 1rem;
    text-align: left; }

    legend {
    border-bottom: 0; }

    * {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box; }
    *:focus {
        outline: 0; }

    a {
    color: #9c27b0;
    text-decoration: none;
    background-color: transparent; }
    a:hover, a:focus {
        color: #89229b;
        text-decoration: none; }

    label {
    font-size: 14px;
    line-height: 1.42857;
    color: #aaaaaa;
    font-weight: 400; }

    small {
    font-size: 75%;
    color: #777;
    font-weight: 400; }

    img {
    vertical-align: middle;
    border-style: none; }

    form {
    margin-bottom: 1.125rem; }
`

export default Reset
