import {createGlobalStyle} from 'styled-components';
import {DefaultTheme} from '../../config/themes/global.theme';


export type _DefaultTheme = {
    theme: DefaultTheme
}

const GlobalStyle = createGlobalStyle<_DefaultTheme>`
  @import url(${({ theme }) => theme.font.import});
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({theme}) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: ${({theme}) => theme.font.family};
    font-size: 1.15em;
    margin: 0;
  }

`;

export default GlobalStyle;