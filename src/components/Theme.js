import { createTheme, responsiveFontSizes } from "@mui/material";
const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
let Theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    body1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "gray",
    },
  },
});
Theme = responsiveFontSizes(Theme);
export default Theme;
