import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { projects } from "../src/utils/data";
import PrjCard from "../src/components/PrjCard";

function Portfolio() {
  return (
    <React.Fragment>
      <Box m="auto">
        <Container>
          <Typography variant="h1" textAlign="center" my={2}>
            Portfolio
          </Typography>
          <Typography
            component="h2"
            variant="h3"
            textAlign="center"
            mb={3}
          >
            <small>Meus projetos recentes:</small>
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="stretch"
            maxWidth={1200}
            m="auto"
          >
            {projects.map((prj) => (
              <PrjCard key={prj.title} project={prj} />
            ))}
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Portfolio;
