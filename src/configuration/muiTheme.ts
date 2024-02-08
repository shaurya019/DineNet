import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#F3F7F5",
      main: "#4F7066",
      dark: "#4F7066",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#ff7961",
      main: "#757575",
      dark: "#ba000d",
      contrastText: "#757575",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "Roboto"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        outlined: {
          borderWidth: 2,
          borderColor: "#4F7066",
          fontFamily: "Montserrat",
          fontSize: 12,
          fontWeight: 600,
        },
        contained: {
          fontFamily: "Roboto",
          fontSize: 12,
          fontWeight: 400,
        },
      },
    },
  },
});
