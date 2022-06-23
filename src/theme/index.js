import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
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
    MuiImageList: {
      styleOverrides: {
        root: {
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          margin: "auto",
          maxWidth: "1200px",
          padding: "2px",
        },
      },
    },
    MuiImageListItem: {
      styleOverrides: {
        root: {
          margin: "2px",
          maxWidth: "512px",
        },
      },
    },
    MuiImageListItemBar: {
      styleOverrides: {
        subtitle: {
          lineHeight: 1.5,
        },
      },
    },
  },
});
