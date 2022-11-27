import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Jost', sans-serif;
    }

    li{
        list-style: none;
    }

    a:hover{
        color: #6138BD;
    }

    .text-color-2{
        color: #11204D;
    }

    .text-17{
        font-size: 17px;
        line-height: 31px;
    }

    .weight-regular{
        font-weight: 400;
    }

    .weight-medium{
        font-weight: 500;
    }

`;

export default GlobalStyle;
