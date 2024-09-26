import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/card/AddNewCardButton";

const MyBusinessCards = () => {
  const { value, handleGetMyCards, handleDeleteCard, handleLikeCard } = useCards();
  const { filterCards, error, isLoading } = value;

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    
    if (!user) {
      navigate(ROUTES.CARDS);
    } else {
      handleGetMyCards(); 
    }
  }, [user, handleGetMyCards, navigate]);

  const onDeleteCard = async (id) => {
    await handleDeleteCard(id); 
    await handleGetMyCards();
  };

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        {/* Header for the business cards page */}
        <PageHeader
          title="My Business Cards"
          subtitle="Here are all your business cards categorized accordingly"
        />
        {/* Display feedback for loading and errors */}
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={filterCards}
          handleDelete={onDeleteCard}  
          handleLike={handleLikeCard}  
        />
        {/* Button to add a new business card */}
        <AddNewCardButton />
      </Container>
    </div>
  );
};

export default MyBusinessCards;
