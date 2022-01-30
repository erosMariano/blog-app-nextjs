import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  scroll-behavior: smooth;
}
  html,
  body, 
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .container{
    max-width: 1200px;
    margin: 0 auto;

    @media(max-width: 1327px){
        padding-left: 40px;
        padding-right: 40px;
    }
  }
`
export default GlobalStyle;