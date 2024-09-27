import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function AddCardButton() {
  const navigate = useNavigate();

  return (
    <Fab
      color="primary"
      sx={{ position: "fixed", right: 16, bottom: 72 }}
      onClick={() => navigate(ROUTES.CREATE_CARD)}
    >
      <Add />
    </Fab>
  );
}