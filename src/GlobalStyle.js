import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

/* root here */
:root{
    --blue: #00fffb;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
}

/* fonts */
/* font-family: 'Arizonia', cursive; n
font-family: 'Encode Sans Expanded', sans-serif quote 100;
font-family: 'Open Sans', sans-serif p;
font-family: 'Playfair Display', serif h; */


/* global style */
* {
    box-sizing: border-box;
    font-size: 14px;

    @media screen and (min-width: 460px){
        font-size: 16px;
    }

    @media screen and (min-width: 720px){
        font-size: 18px;
    }

    @media screen and (min-width: 1024){
        font-size: 20px;
    }
}

ul, li{
    padding: 0;
    margin: 0;
    list-style: none;
}

a{
    text-decoration: none;
}

body{
    margin: 0;
    padding: 0;
    background: #0A192F;

    
    

    h1, h2, h3, h4, p{
        margin: 0;
    }

    h2,
    h3,
    h4 {
    font-family: 'Playfair Display', serif
    }

    p,
    span, label{
    font-family: 'Open Sans', sans-serif;
    }

    h1{
        font-size: 2rem;
    }

    h2{
        font-size: 1.5rem;
    }

    h3{
        font-size: 1.1rem;
    }

    p{
        font-size: 1rem;
    }

    overflow-x: hidden;

    
}


.App > span{
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  

`;
