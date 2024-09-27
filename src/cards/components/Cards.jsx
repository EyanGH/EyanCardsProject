import { useNavigate } from "react-router-dom";
import CardComponent from "./card/CardComponent";
import { Container } from "@mui/material";
import ROUTES from "../../routes/routesModel";

export default function Cards({ cards, handleDelete, handleLike }) {
  const navigate = useNavigate();
  const handleEdit = (id) => navigate(ROUTES.EDIT_CARD + "/" + id);

  return (
    <Container sx={{ display: "flex", flexWrap: "wrap" }}>
      {cards.map((card) => (
        <CardComponent
          card={card}
          key={card._id}
          handleDelete={handleDelete}
          handleLike={handleLike}
          handleEdit={handleEdit}
        />
      ))}
    </Container>
  );
}
