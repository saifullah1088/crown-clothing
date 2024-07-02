import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        font-family:"Roboto Condensed";
        padding:20px 20px;

        @media screen and (max-width:800px) {
            padding:10px 10px
        }
    }

    a {
        text-decoration:none;
        color:black
    }

    * {
        box-sizing:border-box;
    }
`;
