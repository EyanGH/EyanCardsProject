import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import { Typography } from "@mui/material";
import AddCardButton from "../components/AddCardButton";

export default function MyCardsPage() {
  const { cards, error, isLoading, getMyCards, handleDelete, handleLike } =
    useCards();

  useEffect(() => {
    getMyCards();
  }, []);

  return (
    <div>
      <PageHeader
        title="My cards"
        subtitle="Welcome to may cards page"
      />
      <Typography paragraph>
        Here you will find the cards you created
      </Typography>
      <CardsFeedback
        cards={cards}
        isLoading={isLoading}
        error={error}
        handleDelete={handleDelete}
        handleLike={handleLike}
      />
      <AddCardButton />
    </div>
  );
}
