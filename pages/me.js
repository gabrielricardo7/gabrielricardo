import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { author } from "../src/utils/data";

function Me() {
  return (
    <React.Fragment>
      <Box maxWidth={320} m="auto">
        <Container>
          <Typography variant="h1" textAlign="center" my={2}>
            Sobre mim
          </Typography>
          <Typography variant="body1" textAlign="justify">
            Olá! Sou o {author}, tenho 27 anos de idade, resido
            atualmente em São Paulo,&nbsp;🇧🇷. Profissional em
            desenvolvimento web, ingressando na carreira de
            tecnologia, para adquirir mais experiência.
            <br />
            Busco sempre aumentar meu conhecimento para resolver
            problemas com precisão e atenção aos detalhes, escrevendo
            código limpo, testando, depurando e mantendo aplicações,
            utilizando as linguagens de programação e sistemas de
            gerenciamento de banco de dados mais requisitados.
          </Typography>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Me;
