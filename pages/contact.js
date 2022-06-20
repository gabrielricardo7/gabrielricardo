import React from "react";
import Head from "next/head";
import { links } from "../src/utils/data";
import { Box, List, ListItem, Typography } from "@mui/material";

const Contact = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Contact - Gabriel Ricardo</title>
      </Head>
      <Typography variant="h1" textAlign="center">
        Contact
      </Typography>
      <Box mx="auto" my={7} width={300}>
        <List
          sx={{ display: "flex", flexWrap: "no-wrap", m: "auto" }}
        >
          {links.map((link) => (
            <a
              href={link.path}
              target={"_blank"}
              rel={"noopener noreferer"}
            >
              <ListItem>
                <Typography variant="p" textAlign="center">
                  {link.icon}&nbsp;{link.name}
                </Typography>
              </ListItem>
            </a>
          ))}
        </List>
      </Box>
    </React.Fragment>
  );
};

export default Contact;
