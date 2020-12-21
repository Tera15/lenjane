import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    h1: {
      fontSize: ["7xl"],
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "headingText",
    },
    h2: {
      fontSize: ["5xl"],
      textTransform: "uppercase",
      color: "headingText",
    },
    p: {},
    menu: {
      fontSize: "3xl",
      textTransform: "uppercase",
      color: "headingText",
    },
  },
  colors: {
    background: "#FFFBF6",
    headingText: "#292622",
    bodyText: "554F46",
  },
  fonts: {
    body: "montserrat, sans-serif",
    heading: "Cormorant Garamond, serif",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "21.33px",
    "2xl": "24px",
    "3xl": "28.43px",
    "4xl": "37.9px",
    "5xl": "50.2px",
    "6xl": "67.4px",
    "7xl": "87.5px",
  },
});

export default theme;
