
import NavBarItem from "../../../routes/components/NavBarItem";
import { Box } from "@mui/material";
import ROUTES from "../../../routes/routesModel";
import { useTheme } from "../../../providers/CustomThemeProvider";

export default function NotLogged() {
  const {isDark} = useTheme();
  return (
    <Box>
      <NavBarItem label="Signup" sx={{ color: isDark ? "white" : "black"}} to={ROUTES.SIGNUP} />
      <NavBarItem label="Login" sx={{ color: isDark ? "white" : "black"}} to={ROUTES.LOGIN} />
    </Box>
  );
}
