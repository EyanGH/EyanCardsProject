import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardHeaderComponent from "./CardHeaderComponent";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import { useCurrentUser } from "../../../users/providers/UserProvider";
import { useState } from "react";

export default function CardComponent({
  card,
  handleDelete,
  handleEdit,
  handleLike: onLike,
}) {
  const { user } = useCurrentUser();
  const [isFavorite, setIsFavorite] = useState(Boolean(user && card.likes.includes(user._id)));
  const navigate = useNavigate();
  const handleLike = (id) => {
    onLike(id);
    setIsFavorite(prev => !prev);
  };

  return (
    <Card sx={{ width: 250, m: 2 }}>
      <CardActionArea
        onClick={() => navigate(ROUTES.CARD_INFO + "/" + card._id)}
      >
        <CardHeaderComponent
          image={card.image.url}
          alt={card.image.alt}
          title={card.title}
          subtitle={card.subtitle}
        />

        <CardBody
          phone={card.phone}
          address={card.address}
          bizNumber={card.bizNumber}
        />
      </CardActionArea>
      <CardActionBar
        cardId={card._id}
        ownerId={card.user_id}
        handleDelete={handleDelete}
        handleLike={handleLike}
        handleEdit={handleEdit}
        isFavorite={isFavorite}
      />
    </Card>
  );
}
