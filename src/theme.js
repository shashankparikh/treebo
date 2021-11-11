import { createGlobalStyle } from "styled-components";

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const theme = {
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  fontWeightBold: "bold",
  device: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
  },
  color: {
    white: "#ffffff",
    darkGreen: "#355854",
    black: "#000000",
    orange: "#f78c3e",
    primary: "#f78c3e",
  },

  backgroundColor: {
    white: "#ffffff",
    darkGreen: "#355854",
    drakGrey: "#4b4b4b",
    lightGrey: "#acacac",
    orange: "#f78c3e",
  },
  border: {
    borderRadius: "10px",
  },

  maxContainerWidth: "1400px",
  fontSize: {
    fontSizeHeading: "18px",
    fontSizeDesktop: "16px",
    fontSizeTablet: "14px",
    fontSizeMobile: "12px",
  },
};

export const lightTheme = {
  body: "#fff",
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
};

export const darkTheme = {
  body: "#363537",
  text: "#fff",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
};

export const GlobalStyles = createGlobalStyle`

body{
    background-color:${(props) => props.theme.body};
    color:${(props) => props.theme.text};

}
`;
