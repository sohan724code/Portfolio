import React from "react";
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
import useDark from "../../../hooks/useDark";

const Navbar = () => {
  const { dark } = useDark();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      id="home"
      position="static"
      style={{
        backgroundColor: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#222",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mx: 3, display: { xs: "none", md: "flex" } }}
            style={{
              color: "#2980b6",
              fontSize: "40px",
              fontWeight: "800px",
              fontFamily: "Comforter,cursive",
            }}
          >
            {"<Jahidul Islam/>"}
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
              <MenuIcon style={{ color: "#2980b6" }} />
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
              <a href="#about">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
              </a>
              <a href="#skills">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Skills</Typography>
                </MenuItem>
              </a>
              <a href="#projects">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Projects</Typography>
                </MenuItem>
              </a>
              <a href="contact">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Resume and Contact</Typography>
                </MenuItem>
              </a>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            style={{
              color: "#2980b6",
              fontSize: "40px",
              fontWeight: "800px",
              fontFamily: "Comforter,cursive",
            }}
          >
            {"<Jahidul Islam/>"}
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItem: "center",
              mr: 8,
            }}
          >
            <a href="#about">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  mr: 4,
                  fontSize: "16px",
                }}
                style={{ color: dark ? "#fff" : "#222" }}
              >
                About
              </Button>
            </a>
            <a href="#skills">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  mr: 4,
                  fontSize: "16px",
                }}
                style={{ color: dark ? "#fff" : "#222" }}
              >
                Skills
              </Button>
            </a>
            <a href="#projects">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  mr: 4,
                  fontSize: "16px",
                }}
                style={{ color: dark ? "#fff" : "#222" }}
              >
                Projects
              </Button>
            </a>
            <a href="#contact">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  mr: 4,
                  fontSize: "16px",
                }}
                style={{ color: dark ? "#fff" : "#222" }}
              >
                Resume and Contact
              </Button>
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
