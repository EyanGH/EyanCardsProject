import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import { useSnack } from "../../providers/SnackbarProvider";
import useCards from "../hooks/useCards";
import { Typography } from "@mui/material";
import { useCurrentUser } from "../../users/providers/UserProvider";

export default function FavoriteCards() {
  const { user } = useCurrentUser();

  const { cards, error, isLoading, getAllCards, handleDelete, handleLike } =
    useCards();

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <div>
      <PageHeader
        title="Favorite cards"
        subtitle="Welcome to favorite cards page"
      />
      <Typography paragraph>
        Here you will find the favorite cards
      </Typography>
      <CardsFeedback
        cards={cards.filter(card => card.likes.includes(user._id))}
        isLoading={isLoading}
        error={error}
        handleDelete={handleDelete}
        handleLike={handleLike}
      />
    </div>
  );
}
