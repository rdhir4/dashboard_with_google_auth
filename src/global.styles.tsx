import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<DefaultProps>`


body {
    margin: 0;
    font-family:"Regular", "sans-serif";
    background: #F5F5F5;

    button {
      cursor: pointer;
      display: block;
    }
  }

  :root{
    --base-font-color: ${(props) => props.theme.headerColor};
    --borderColor: ${(props) => props.theme.borderColor};
    --inputBorderColor: ${(props) => props.theme.inputBorderColor};
    --whiteColor: ${(props) => props.theme.white};
    --loginButtonColor:  ${(props) => props.theme.loginButtonColor};
    --onHoverLogin: ${(props) => props.theme.onHoverLogin};
    --body: ${(props) => props.theme.body};
    --linkColor: ${(props) => props.theme.linkColor};
    --blackColor: ${(props) => props.theme.blackColor};
    --searchPlaceholder: ${(props) => props.theme.searchPlaceholder};
    }
`

export default GlobalStyle

export interface DefaultProps {
  theme:Itheme
}

export interface Itheme {
  body: string;
  headerColor: string;
  borderColor: string;
  inputBorderColor: string;
  white: string;
  loginButtonColor: string;
  onHoverLogin: string;
  linkColor: string;
  blackColor: string;
  searchPlaceholder: string;
}    
