"use client";
import React from "react";
import { useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Home", "Experience", "Projects", "Contact"];

export default function ResponsiveAppBar() {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavMenuClick = React.useCallback(
    (page) => {
      handleCloseNavMenu();

      if (page === "Home") {
        router.push("/");
      } else if (page === "Projects") {
        router.push("/projects");
      } else {
        const id = page.toLowerCase();
        router.push(`/#${id}`);
      }
    },
    [router]
  );

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#161616", borderBottom: "0.05px solid #cccccc41" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "rgba(255, 255, 255, 0.90)",
              textDecoration: "none",
            }}
          >
            Zayn
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleNavMenuClick(page)}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "rgba(255, 255, 255, 0.90)",
              textDecoration: "none",
            }}
          >
            Zayn
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "end", padding: "0 2rem" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavMenuClick(page)}
                sx={{
                  my: 2,
                  fontSize: 14,
                  color: "rgba(255,255,255, 0.90)",
                  display: "block",
                  transition: ".2s all ease",
                  fontWeight: "400",
                  "&:hover": { color: "#fff" },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
