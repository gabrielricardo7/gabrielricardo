import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { author } from "../src/utils/data";

function About() {
  return (
    <React.Fragment>
      <Box maxWidth={320} m="auto">
        <Container>
          <Typography variant="h1" textAlign="center" my={2}>
            About
          </Typography>
          <Typography variant="body1" textAlign="justify">
            Hi there! I'm {author}, 27 years old, I currently live in
            São Paulo, Brazil. Professional in web development,
            joining technology career, to acquire more experience.
            <br />I always seek to increase my knowledge to solve
            problems with accuracy and attention to detail, writing
            clean code, testing, debuging and maintaining
            applications, using the most requested programming
            languages and database management systems.
          </Typography>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default About;
