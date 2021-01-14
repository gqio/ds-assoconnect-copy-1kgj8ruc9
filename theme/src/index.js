import React from "react@16.13.1";
import ReactDOM from "react-dom@16.13.1";
import "./bootstrap.scss"; // used to inject bootstrap as global style
import { ThemeProvider as TP, createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${theme.fontSizes.body};
  }
  body {
    background: ${theme.colors.background};
    overflow-x: hidden;
  }
  ul {
    padding-left: 2rem;
  }
  // Hack Bootstrap readonly
  input[readonly]:not([disabled]) {
    background-color: ${theme.colors.base.white} !important;
  }
  &::-webkit-scrollbar-track {
    border-radius: ${theme.radii.default};
    background-color: ${theme.colors.base.grey.light};
  }
  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${theme.colors.base.grey.light};
    border-radius: ${theme.radii.default};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: ${theme.radii.default};
    background-color: ${theme.colors.grey};
  }
`;

const ThemeProvider = ({ children }) => (
  <TP theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </TP>
);

export { ThemeProvider, theme };
