import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import { useSnack } from "../../providers/SnackbarProvider";
import useCards from "../hooks/useCards";
import AddCardButton from "../components/AddCardButton";

export default function CardsPage() {
  const { cards, error, isLoading, getAllCards, handleDelete, handleLike } =
    useCards();

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <div>
      <PageHeader
        title="Cards"
        subtitle="On this page you can find all bussines cards from all categories"
      />
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
