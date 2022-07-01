import React from "react";
import {
  distros,
  hardSkills,
  softSkills,
  techs,
} from "../src/utils/data";
import {
  Box,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { SiApple, SiLinux, SiWindows } from "react-icons/si";

function Skills() {
  return (
    <React.Fragment>
      <Container>
        <Typography variant="h1" textAlign="center" my={2}>
          Habilidades
        </Typography>
        <Typography variant="h2" textAlign="center">
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
            <ListItem>
              <SiApple />
              &nbsp;macOS
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <details>
                <summary
                  style={{
                    cursor: "pointer",
                    display: "flex",
                  }}
                >
                  <SiLinux />
                  &nbsp;GNU/Linux
                </summary>
                <List sx={{ lineHeight: "normal" }}>
                  {distros.map((distro) => (
                    <ListItem
                      key={distro.name}
                      sx={{ px: 0, py: 0.5 }}
                    >
                      <distro.icon />
                      &nbsp;{distro.name}
                    </ListItem>
                  ))}
                </List>
              </details>
            </ListItem>
            <ListItem>
              <SiWindows />
              &nbsp;Windows
            </ListItem>
          </List>
        </Box>
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
