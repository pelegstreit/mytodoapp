import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body,
    #root{
      min-height: 100%;
      min-width: 100%;
    }
    html {
      font-size: 10px;
      /* border: 2px blue double */
    }
    body {
      background: papayawhip;
      background: linear-gradient(to bottom,#f5f5dc 0%,#d2b48c 100%);
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    li {
      list-style-type: none;
    }
`;

export default GlobalStyles;
