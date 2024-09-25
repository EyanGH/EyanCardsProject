import React from "react";
import { Box } from "@mui/material";
import ROUTES from "../../../routes/routesModel";
import LogoIcon from "../logo/LogoIcon";
import Logo from "../logo/Logo";
import NavBarItem from "../../../routes/components/NavBarItem";
export default function LeftNavBar() {
  return (
    <Box>
      <LogoIcon />
      <Logo />
      <NavBarItem to={ROUTES.CARDS} label={"Cards"} />
      <NavBarItem to={ROUTES.ABOUT} label={"About"} />
      <NavBarItem to={ROUTES.SANDBOX} label={"Sandbox"} />
    </Box>
  );
}
