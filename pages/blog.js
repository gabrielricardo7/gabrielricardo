import React from "react";
import Link from "next/link";
import {
  Avatar,
  Box,
  Container,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { pages } from "../src/utils/data";
import { IoHourglassOutline } from "react-icons/io5";
import { VscArrowLeft } from "react-icons/vsc";

function Blog() {
  return (
    <React.Fragment>
      <Box mt={2} mb={20}>
        <Container>
          <Stack alignItems="center">
            <Typography variant="h1" textAlign="center">
              Blog
            </Typography>
            <br />
            <IoHourglassOutline size={64} />
            <br />
            <Typography
              variant="h6"
              component="h2"
              textAlign="center"
            >
              <small>
                {"Página em desenvolvimento".toUpperCase()}
              </small>
            </Typography>
            <br />
            <Link href={pages[0].path}>
              <Tooltip title="Voltar à página inicial">
                <Avatar
                  sx={{
                    cursor: "pointer",
                    bgcolor: green[500],
                    ":hover": { bgcolor: green[700] },
                  }}
                >
                  <VscArrowLeft />
                </Avatar>
              </Tooltip>
            </Link>
          </Stack>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Blog;
