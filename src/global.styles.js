import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        font-family:"Roboto Condensed";
        padding:20px 20px
    }

    a {
        text-decoration:none;
        color:black
    }

    * {
        box-sizing:border-box;
    }
`;
