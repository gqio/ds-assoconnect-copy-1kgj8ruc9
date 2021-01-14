import React from "react";
import { ThemeProvider } from "~/theme";
export const withThemeProvider = () => (storyFn) => (
  <>
    <ThemeProvider>{storyFn()}</ThemeProvider>
  </>
);
