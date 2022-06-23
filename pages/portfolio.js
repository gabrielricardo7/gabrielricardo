import React from "react";
import { Box, Container, Typography } from "@mui/material";
import PortfolioImageList from "../src/components/PortfolioImageList";

function Portfolio() {
  return (
    <React.Fragment>
      <Box m="auto">
        <Container>
          <Typography variant="h1" textAlign="center" my={2}>
            Portfolio
          </Typography>
          <Typography variant="h2" textAlign="center" mb={3}>
            My recent works:
          </Typography>
          <PortfolioImageList />
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Portfolio;
