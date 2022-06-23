import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { HiCode } from "react-icons/hi";

function Footer() {
  return (
    <React.Fragment>
      <Container component="footer">
        <Box mt={1} mb={2} textAlign="center">
          <HiCode />
          <hr />
          <Typography variant="body2" fontWeight={500}>
            &copy; 2022 by Gabriel Ricardo.
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Footer;
