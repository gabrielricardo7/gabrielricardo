import React from "react";
import Link from "next/link";
import { VscArrowLeft, VscWarning } from "react-icons/vsc";
import {
  Avatar,
  Box,
  Container,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { pages } from "../src/utils/data";
import { green } from "@mui/material/colors";

function Custom404() {
  return (
    <React.Fragment>
      <Box mt={8} mb={16}>
        <Container>
          <Stack alignItems="center">
            <VscWarning size={96} color="gold" />
            <Typography
              textAlign="center"
              variant="h2"
              component="h1"
              fontWeight={500}
            >
              404
            </Typography>
            <Typography
              textAlign="center"
              variant="h6"
              component="h2"
            >
              <small>Esta página não pôde ser encontrada.</small>
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

export default Custom404;
