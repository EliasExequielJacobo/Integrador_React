import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle `

* {

    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style-type: none;
    font-family: 'Montserrat', sans-serif;

};

body {

    box-sizing: border-box;   
    margin: 0;
    padding: 0;
    margin: 0;
    user-select: none;
    background: #131415;
    color: white;
    font-family: 'Montserrat', sans-serif;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    text-decoration: none;

};

:root {
    
}

`;

export default GlobalStyles;