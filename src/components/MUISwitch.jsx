import React, { useContext } from "react";
import { ColorModeContext } from "../context";
import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

function MUISwitch() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <React.Fragment>
      <Tooltip title="Mudar tema">
        <IconButton onClick={colorMode.toggleTheme} color="inherit">
          {theme.palette.mode === "dark" ? (
            <Brightness7 />
          ) : (
            <Brightness4 />
          )}
        </IconButton>
      </Tooltip>
    </React.Fragment>
  );
}

export default MUISwitch;
