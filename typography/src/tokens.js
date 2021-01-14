const baseFonts = {
  primary: "Roboto",
  secondary: "Baloo",
};
export const fonts = {
  ...baseFonts,
  "sans-serif": `${baseFonts.primary}, sans-serif`,
};

const baseFontSizes = {
  small: "86%",
  normal: "1rem",
  large: "1.286rem",
  xLarge: "1.429rem",
  xxLarge: "1.571rem",
  xxxLarge: "2.286rem",
};

export const fontSizes = {
  ...baseFontSizes,
  body: "14px",
  h4: baseFontSizes.large,
  h3: baseFontSizes.xLarge,
  h2: baseFontSizes.xxLarge,
  h1: baseFontSizes.xxxLarge,
};

const baseFontWeights = {
  normal: "400",
  bold: "700",
};

export const fontWeights = {
  ...baseFontWeights,
  body: baseFontWeights.normal,
  heading: baseFontWeights.bold,
};

export const letterSpacings = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
};

const baseLineHeights = {
  relaxed: "30px",
  loose: "46px",
};

export const lineHeights = {
  ...baseLineHeights,
};

export default {
  font: {
    weight: fontWeights,
    family: fonts,
    size: fontSizes,
  },
  tracking: letterSpacings,
  lineHeight: lineHeights,
};
