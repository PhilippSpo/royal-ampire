import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components'
import App from './App';
import * as colors from './open-color'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "lato",sans-serif;
    background-color: #323232;
    color: ${colors.gray7};
  }

  a {
    color: ${colors.gray7};
    text-decoration: underline;
  }

  a:hover,
  a:focus,
  a:active {
    color: ${colors.gray8};
    cursor: pointer;
  }
`

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
