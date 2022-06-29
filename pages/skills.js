import React from "react";
import { hardSkills, softSkills, techs } from "../src/utils/data";
import {
  Box,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";

function Skills() {
  return (
    <React.Fragment>
      <Container>
        <Typography variant="h1" textAlign="center" my={2}>
          Competências
        </Typography>
        <Typography variant="h2" textAlign="center" my={2}>
          Hard Skills
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          fontWeight={500}
          justifyContent="center"
          m="auto"
          maxWidth={600}
          minWidth={300}
        >
          <Box width={300}>
            <List sx={{ lineHeight: "normal" }}>
              {techs.map((tech) => (
                <ListItem key={tech.name}>
                  <tech.icon />
                  &nbsp;{tech.name}
                </ListItem>
              ))}
            </List>
          </Box>
          <Box width={300}>
            <List sx={{ lineHeight: "normal" }}>
              {hardSkills.map((skill) => (
                <ListItem key={skill}>{skill}</ListItem>
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
          fontWeight={500}
          m="auto"
          width={300}
        >
          <List>
            {softSkills.map((skill) => (
              <ListItem key={skill}>{skill}</ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Skills;
