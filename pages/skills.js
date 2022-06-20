import React from "react";
import Head from "next/head";
import { hardSkills, softSkills, techs } from "../src/utils/data";
import { Box, List, ListItem, Typography } from "@mui/material";

const Skills = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Skills - Gabriel Ricardo</title>
      </Head>
      <Typography variant="h1" textAlign="center" my={2}>
        Skills
      </Typography>
      <Typography variant="h2" textAlign="center" my={2}>
        Hard Skills
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        m="auto"
        minWidth={300}
        maxWidth={600}
      >
        <Box width={300}>
          <List sx={{ lineHeight: "normal" }}>
            {techs.map((tech) => (
              <ListItem>
                {tech.icon}&nbsp;{tech.name}
              </ListItem>
            ))}
          </List>
        </Box>
        <Box width={300}>
          <List sx={{ lineHeight: "normal" }}>
            {hardSkills.map((skill) => (
              <ListItem>{skill}</ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Typography variant="h2" textAlign="center" my={2}>
        Soft Skills
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        m="auto"
        width={300}
      >
        <List>
          {softSkills.map((skill) => (
            <ListItem>{skill}</ListItem>
          ))}
        </List>
      </Box>
    </React.Fragment>
  );
};

export default Skills;
