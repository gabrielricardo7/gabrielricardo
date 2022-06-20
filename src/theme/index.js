import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: 48,
    },
    h2: {
      fontSize: 42,
    },
    h3: {
      fontSize: 36,
    },
    h4: {
      fontSize: 30,
    },
    h5: {
      fontSize: 24,
    },
    h6: {
      fontSize: 18,
    },
  },
  components: {
    MuiImageListItemBar: {
      styleOverrides: {
        subtitle: {
          lineHeight: 1.5,
        },
      },
    },
  },
});
