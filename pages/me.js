import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { author } from "../src/utils/data";

function Me() {
  return (
    <React.Fragment>
      <Box maxWidth={700} m="auto">
        <Container>
          <Typography variant="h1" textAlign="center" my={2}>
            Sobre mim
          </Typography>
          <Typography variant="body1" textAlign="justify">
            Olá! Sou o {author}, tenho 27 anos de idade, resido
            atualmente em São Paulo, Brasil. Meu contato com
            tecnologia começou desde criança, ao me interessar por
            como fazer programas de computador, aprendi lógica de
            programação com meu tio e criei minhas primeiras
            aplicações em Delphi 7; mais tarde fiz alguns cursos em
            vídeo e estudei Desenvolvimento Web Full Stack na Kenzie
            Academy Brasil.
          </Typography>
          <Typography textAlign="center">🇧🇷</Typography>
          <Typography variant="body1" textAlign="justify">
            Profissional em desenvolvimento web, ingressando na
            carreira de Tecnologia da Informação para adquirir mais
            experiência. Busco sempre aumentar meu conhecimento para
            resolver problemas, com precisão e atenção aos detalhes,
            escrevendo código limpo, testando, depurando e mantendo
            aplicações, utilizando as linguagens de programação e
            sistemas de gerenciamento de banco de dados mais
            requisitados.
          </Typography>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Me;
