
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useCallback } from "react";
import { removeToken } from "../../../users/services/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import { useCurrentUser } from "../../../users/providers/UserProvider";

export default function Logged() {
  const navigate = useNavigate();
  const { setUser } = useCurrentUser();
  const handleLogout = useCallback(() => {
    if (confirm("Are you sure you want to logout?")) {
      removeToken();
      setUser(null);
      navigate(ROUTES.ROOT);
    }
  }, []);

  return (
    <IconButton sx={{ p: 0, display: "inline-flex", marginLeft: 2 }} onClick={handleLogout}>
      <Avatar alt="avatar" src="/images/avatar.png" />
    </IconButton>
  );
}
