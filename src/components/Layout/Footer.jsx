import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <Box>
          <Container>
            <Box mt={2} textAlign="center">
              <Typography variant="body2">
                <hr />
                Copyright &copy; 2022 Gabriel Ricardo.
                <br />
                &nbsp;
              </Typography>
            </Box>
          </Container>
        </Box>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
