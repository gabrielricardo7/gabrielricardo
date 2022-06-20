import React from "react";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import InfoIcon from "@mui/icons-material/Info";
import { items } from "../utils/data";

const PortfolioImageList = () => {
  return (
    <ImageList
      sx={{
        m: "auto",
        minWidth: 250,
        maxWidth: 1000,
      }}
    >
      {items.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <a
                  href={item.url}
                  target={"_blank"}
                  rel={"noopener noreferer"}
                >
                  <InfoIcon />
                </a>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default PortfolioImageList;
