import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --font-default: 'Inter', sans-serif;
    --font-normal: 400;
    --font-bold:700;

    --bg-color: #f1f1f1;
    --text-color: #121214;
    --header-color: #f9f9f9;
    --border-select: rgba(0,0,0,.15);
}

#darkmode-toggle,
:root:has(#darkmode-toggle:checked){
    --bg-color: #121214;
    --text-color: #f1f1f1;
    --header-color: #161616;
    --border-select: rgba(255,255,255,.15);
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media screen and (max-width: 1080px){
        font-size: 93,75%;
    }
    @media screen and (max-width: 768px){
        font-size: 87,5%;
    }
}

body{
    font-family: var(--font-default);
    -webkit-font-smoothing: antialiased;
    background-color: var(--bg-color);
    color: var(--text-color);
}

body, input, textarea{
    font-weight: var(--font-normal);
}

h1, h2, h3, h4, h5, h6{
    font-weight: var(--font-bold);
}

button{
    cursor: pointer;
    font-weight: var(--font-bold);
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}



`