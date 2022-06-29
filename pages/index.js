import React from "react";
import Link from "next/link";
import { HiCode } from "react-icons/hi";
import { ImInfo } from "react-icons/im";
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
      <Box mt={6} mb={12}>
        &nbsp;
        <Container>
          <Stack alignItems="center">
            <Avatar
              alt={author}
              src={`${avatar}?s=240`}
              sx={{ width: 120, height: 120 }}
            />
            <HiCode size={42} />
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
            <Typography
              component="h2"
              variant="h4"
              textAlign="center"
            >
              <small>{stack}</small>
            </Typography>
            <br />
            <Link href="/me">
              <Typography
                variant="p"
                textAlign="center"
                fontWeight={500}
                color="#888"
                sx={{
                  cursor: "pointer",
                  ":hover": { filter: "brightness(120%)" },
                }}
              >
                <ImInfo />
                &nbsp; Mais sobre mim
              </Typography>
            </Link>
          </Stack>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Home;
