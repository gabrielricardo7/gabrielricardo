import React from "react";
import Head from "next/head";
import { HiCode } from "react-icons/hi";
import {
  Avatar,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";

const Home = () => {
  const me = "Gabriel Ricardo | Front-End Developer";

  return (
    <React.Fragment>
      <Head>
        <title>{me}</title>
      </Head>
      <Box my={20}>
        &nbsp;
        <Container>
          <Stack alignItems="center">
            <Avatar
              alt="Gabriel Ricardo"
              src="https://www.gravatar.com/avatar/f12a374ad0cbbadd6ef3613220d00095"
              sx={{ width: "80px", height: "80px" }}
            />
            <HiCode size={42} />
          </Stack>
          <Typography variant="h1" textAlign="center">
            {me.split("|")[0]}
            <br />
            <small>{me.split("|")[1]}</small>
          </Typography>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Home;
