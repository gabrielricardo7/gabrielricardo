import React from "react";
import Head from "next/head";
import { Container, Typography } from "@mui/material";
import PortfolioImageList from "../src/components/PortfolioImageList";

const Portfolio = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Portfolio - Gabriel Ricardo</title>
      </Head>
      <Container>
        <Typography variant="h1" textAlign="center" my={2}>
          Portfolio
        </Typography>
        <Typography variant="h2" textAlign="center" mb={3}>
          My recent works:
        </Typography>
        <PortfolioImageList />
      </Container>
    </React.Fragment>
  );
};

export default Portfolio;
