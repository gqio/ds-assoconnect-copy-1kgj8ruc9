const baseColors = {
  blue: {
    default: "hsl(222, 88%, 57%)",
    lightest: "hsl(222, 87%, 94%)",
    lighter: "hsl(222, 89%, 82%)",
    light: "hsl(222, 81%, 59%)",
    dark: "hsl(222, 66%, 50%)",
    darker: "hsl(222, 100%, 42%)",
    darkest: "hsl(223, 73%, 22%)",
  },
  green: {
    default: "#00c1a2",
    dark: "#00aa8e",
    darker: "hsl(170, 94%, 30%)",
    darkest: "hsl(170, 94%, 20%)",
  },
  grey: { default: "#999999", light: "#cacaca", dark: "#626262" },
  red: { default: "#f36052", dark: "#e0574a" },
  yellow: { default: "#f6c131", dark: "#f9ac29" },
  cosmopolitan: "#c40016",
  florida: "#f29849",
  black: "#333333",
  white: "#ffffff",
};

export const colors = {
  base: baseColors,
  background: "hsl(0, 0%, 95%)",
  body: baseColors.black,
  secondary: baseColors.grey.light,
  "text-muted": baseColors.grey.dark,
};

export default { color: colors };
