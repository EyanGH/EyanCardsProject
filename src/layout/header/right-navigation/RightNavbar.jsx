import { useTheme } from "../../../providers/CustomThemeProvider";
import { Box, IconButton, List, ListItem, Collapse } from "@mui/material";
import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useCurrentUser } from "../../../users/providers/UserProvider";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import SearchBar from "./SearchBar";


export default function RightNavbar() {
  const { user } = useCurrentUser();
  const { isDark, toggleDarkMode } = useTheme();
  const [open, setOpen] = React.useState(false); 

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, 
        alignItems: "center",
        position: "relative",
        padding: 1, 
      }}
    >

      <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
        <IconButton onClick={handleMenuToggle}>
          {open ? "Close" : "Menu"}
        </IconButton>
      </Box>

      {/* Mobile menu content */}
      <Collapse
        in={open}
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          position: "absolute",
          top: "120%",
          right: 0,
          width: "100vw",
          backgroundColor: isDark ? "background.default" : "background.paper",
          boxShadow: 3,
          zIndex: 1000,
          padding: 2,
        }}
      >
      <List>
          <ListItem sx={{ mb: 2, justifyContent: "center" }}>
            <IconButton onClick={toggleDarkMode}>
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </ListItem>
          <ListItem sx={{ justifyContent: "center" }}>
            {user ? <Logged /> : <NotLogged />}
          </ListItem>
        </List>
      </Collapse>

      {/* Desktop view content */}
      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
        <SearchBar isDark={isDark} />
        <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        {user ? <Logged /> : <NotLogged />}
      </Box>
    </Box>
  );
}
