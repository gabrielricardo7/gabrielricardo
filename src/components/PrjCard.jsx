import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";

export default function PrjCard({ project }) {
  return (
    <Card sx={{ width: 256, m: 0.5 }}>
      <CardMedia
        component="img"
        alt={project.title}
        height="192"
        image={project.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          color="text.secondary"
        >
          {project.info}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight={500}
        >
          {project.tags}
        </Typography>
      </CardContent>
      <CardActions>
        <a
          href={project.repo}
          target={"_blank"}
          rel={"noopener noreferer"}
        >
          <Button size="small" startIcon={<GitHub />}>
            Repositório
          </Button>
        </a>
        <a
          href={project.url}
          target={"_blank"}
          rel={"noopener noreferer"}
        >
          <Button size="small" variant="outlined">
            Publicação
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
