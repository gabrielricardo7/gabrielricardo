import React from "react";
import Head from "next/head";
import { Typography } from "@mui/material";

const About = () => {
  const me = "Gabriel Ricardo | Front-End Developer";

  return (
    <React.Fragment>
      <Head>
        <title>About - {me.split("|")[0]}</title>
      </Head>
      <Typography variant="h1" textAlign="center" my={2}>
        About
      </Typography>
      <Typography variant="h2" textAlign="center" mb={5}>
        {me.split("|")[0]}
        <br />
        <small>{me.split("|")[1]}</small>
      </Typography>
      <Typography
        variant="body1"
        textAlign="justify"
        width={300}
        m="auto"
      >
        Hi there! I'm Gabriel Ricardo, 27 years old, I currently live
        in São Paulo, Brazil. Professional in web development, joining
        technology career, to acquire more experience.
        <br />I always seek to increase my knowledge to solve problems
        with accuracy and attention to detail, writing clean code,
        testing, debuging and maintaining applications, using the most
        requested programming languages and database management
        systems.
      </Typography>
    </React.Fragment>
  );
};

export default About;
