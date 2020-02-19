import { createGlobalStyle } from 'styled-components';
import {
    heading1,
    heading2,
    heading3,
    heading4,
    heading5,
    body1,
} from '../variables/index';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

:root {
  font-size: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  height: 100%;
  scroll-behavior: smooth;
}
body {
  height: 100%;
  width: 100%;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button {
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
    vertical-align: baseline;
    outline: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
display: block;
}

body {
    font-weight: 300;
    font-size: ${body1};
    line-height: 1.6;
    font-family: Roboto, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f4f4f4;
    }

h1 {
  font-size: ${heading1};
}

h2 {
  font-size: ${heading2};
}

h3 {
  font-size: ${heading3};
}

h4 {
  font-size: ${heading4};
}

h5 {
    font-size: ${heading5};
}

#root > div:first-child > div:nth-child(2) {
  flex: 1;
}
`;
