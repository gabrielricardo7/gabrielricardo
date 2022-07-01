import React from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import {
  hardSkills,
  softSkills,
  systems,
  techs,
} from "../src/utils/data";

function Skills() {
  return (
    <React.Fragment>
      <Container>
        <Typography variant="h1" textAlign="center" my={2}>
          Habilidades
        </Typography>
        <Typography component="h2" variant="h4" textAlign="center">
          <small>Sistemas Operacionais</small>
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          fontWeight={500}
          m="auto"
          maxWidth={300}
        >
          <List
            sx={{
              lineHeight: "normal",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {systems.map((os) => (
              <ListItem key={os.name} sx={{ px: 0.75 }}>
                <os.icon />
                &nbsp;{os.name}
              </ListItem>
            ))}
          </List>
        </Box>
        <Typography variant="h2" textAlign="center">
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
        <Typography variant="h2" textAlign="center">
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
