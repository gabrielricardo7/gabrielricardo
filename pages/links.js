import React from "react";
import { links } from "../src/utils/data";
import { Box, List, ListItem, Typography } from "@mui/material";

function Links() {
  return (
    <React.Fragment>
      <Typography variant="h1" textAlign="center" my={2}>
        Links de contato
      </Typography>
      <Box mx="auto" my={7} width={300}>
        <List
          sx={{
            display: "flex",
            flexWrap: "no-wrap",
            justifyContent: "center",
            m: "auto",
          }}
        >
          {links.map((link) => (
            <a
              key={link.path}
              href={link.path}
              target={"_blank"}
              rel={"noopener noreferer"}
            >
              <ListItem
                sx={{
                  justifyContent: "center",
                  p: 0,
                }}
              >
                <Typography
                  variant="p"
                  textAlign="center"
                  className="contact-link"
                >
                  <link.icon size={24} />
                  &nbsp;{link.name}
                </Typography>
              </ListItem>
            </a>
          ))}
        </List>
      </Box>
    </React.Fragment>
  );
}

export default Links;
