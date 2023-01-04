import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Jost', sans-serif;
    }

    .playfair{
        font-family: "Playfair Display" !important;
    }

    .space{
        font-family: 'Space Grotesk', sans-serif !important;
    }

    li{
        list-style: none;
    }

    a{
        color: black;
    }

    a:hover{
        color: #6138BD;
        text-decoration: none;
        color: black;
    }

    .text-primary{
        color: #6138BD;
    }

    .text-color-2{
        color: #11204D;
    }

    .text-subtitle{
        color: rgba(17, 32, 77, 0.35);
    }

    .text-14{
        font-size: 14px;
        line-height: 24px;
    }

    .text-17{
        font-size: 17px;
        line-height: 31px;
    }

    .text-24{
        font-size: 24px;
        line-height: 36px;
    }

    .text-36{
        font-size: 36px;
        line-height: 47px;
    }

    .text-68{
        font-size: 68px;
        line-height: 68px;
    }

    .weight-regular{
        font-weight: 400;
    }

    .weight-medium{
        font-weight: 500;
    }

    .weight-light{
        font-weight: 300;
    }

    .weight-bold{
        font-weight: 700;
    }

`;

export default GlobalStyle;
