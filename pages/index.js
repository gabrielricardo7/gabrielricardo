import React from "react";
import { HiCode } from "react-icons/hi";
import {
  Avatar,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { author, avatar, stack } from "../src/utils/data";

function Home() {
  return (
    <React.Fragment>
      <Box mt={8} mb={16}>
        &nbsp;
        <Container>
          <Stack alignItems="center">
            <Avatar
              alt={author}
              src={`${avatar}?s=240`}
              sx={{ width: 120, height: 120 }}
            />
            <HiCode size={42} />
          </Stack>
          <Typography
            component="h1"
            variant="h2"
            textAlign="center"
            fontWeight={700}
          >
            {author.toUpperCase()}
          </Typography>
          <Box
            sx={{
              width: "30%",
              borderTop: "3px solid",
              mx: "auto",
            }}
          ></Box>
          <Typography component="h2" variant="h3" textAlign="center">
            <small>{stack}</small>
          </Typography>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Home;
