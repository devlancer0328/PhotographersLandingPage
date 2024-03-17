import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        scroll-behavior: smooth;
    }

    html {
        overflow-x: hidden;
    }

    body {
        font-family: 'Karla', sans-serif;
        font-size: 16px;
        color: #000000;
        overflow-x: hidden;
    }

    h1 {
        margin: 0 0 24px 0;
    }

    p {
        margin: 0 0 16px 0;
    }
`;

export default GlobalStyle;