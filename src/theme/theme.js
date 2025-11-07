import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    thinkICE: {
      cobaltBlue: "#0072ce",
      navy: "#061848",
      tealDark: "#007C91",
      teal: "#3AAFA9",
      tealLight: "#5BC8AC",
      iceYellow: "#F9F9A7",
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

export default theme;
