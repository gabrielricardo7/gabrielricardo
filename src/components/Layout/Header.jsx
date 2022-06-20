import React from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import { links, pages } from "../../utils/data";
import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CodeIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Link href={pages[0].path}>
            <Typography
              variant="h6"
              noWrap
              component="p"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                // letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Gabriel Ricardo
            </Typography>
          </Link>

          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link href={page.path}>
                  <MenuItem
                    key={page.name}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <CodeIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Link href={pages[0].path}>
            <Typography
              variant="h5"
              noWrap
              component="p"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                // letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Gabriel Ricardo
            </Typography>
          </Link>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Link href={page.path}>
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Contact links">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Gabriel Ricardo"
                  src="https://www.gravatar.com/avatar/f12a374ad0cbbadd6ef3613220d00095"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {links.map((link) => (
                <a
                  href={link.path}
                  target={"_blank"}
                  rel={"noopener noreferer"}
                >
                  <MenuItem
                    key={link.name}
                    onClick={handleCloseUserMenu}
                  >
                    {link.icon}&nbsp;
                    <Typography textAlign="center">
                      {link.name}
                    </Typography>
                  </MenuItem>
                </a>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
