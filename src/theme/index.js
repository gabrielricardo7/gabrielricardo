import React, { useMemo, useState } from "react";
import { ColorModeContext } from "../context";
import { createTheme, ThemeProvider } from "@mui/material";

function BaseTheme(props) {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleTheme: () => {
        setMode((prevMode) =>
          prevMode === "dark" ? "light" : "dark"
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
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
      }),
    [mode]
  );

  return (
    <React.Fragment>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </ColorModeContext.Provider>
    </React.Fragment>
  );
}

export default BaseTheme;
