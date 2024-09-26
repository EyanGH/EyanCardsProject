import React, { useState, useEffect } from "react";
import CardComponent from "./card/CardComponent";
import { Container } from "@mui/material";

export default function Cards({ cards, handleDelete }) {
  const [favoriteCards, setFavoriteCards] = useState([]);


  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteCards"));
    if (storedFavorites) {
      setFavoriteCards(storedFavorites);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("favoriteCards", JSON.stringify(favoriteCards));
  }, [favoriteCards]);


  const handleLike = (cardId) => {
    if (favoriteCards.includes(cardId)) {
      setFavoriteCards(favoriteCards.filter(id => id !== cardId)); 
    } else {
      setFavoriteCards([...favoriteCards, cardId]); 
    }
  };

  const handleEdit = (id) => {
    console.log("editing card " + id);
  };

  return (
    <Container sx={{ display: "flex", flexWrap: "wrap" }}>
      {cards.map((card) => (
        <CardComponent
          card={card}
          key={card._id}
          handleDelete={handleDelete}
          handleLike={handleLike}
          handleEdit={handleEdit}
          isFavorite={favoriteCards.includes(card._id)} 
        />
      ))}
    </Container>
  );
}
