import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --font-default: 'Inter', sans-serif;

    --font-normal: 400;
    --font-bold:700;
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