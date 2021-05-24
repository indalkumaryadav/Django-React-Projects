import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
       padding:0;
       margin:0;
       box-sizing:border-box;
       font-family: 'Roboto', sans-serif;
    }
    body::-webkit-scrollbar {
    width: 0.3em;
    }
    
    body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    
    body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    }
`;

export default GlobalStyle;
