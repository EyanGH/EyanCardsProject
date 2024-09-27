import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import StyleIcon from "@mui/icons-material/Style";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useCurrentUser } from "../../users/providers/UserProvider";

export default function Footer() {
  const navigate = useNavigate();
  const { user } = useCurrentUser();

  return (
    <Paper
      elevation={3}
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />
        <BottomNavigationAction
          label="Cards"
          icon={<StyleIcon />}
          onClick={() => navigate(ROUTES.CARDS)}
        />
        {user && (
          <BottomNavigationAction
            label="Favorites"
            icon={<FavoriteIcon />}
            onClick={() => navigate(ROUTES.FAV_CARDS)}
          />
        )}
      </BottomNavigation>
    </Paper>
  );
}
