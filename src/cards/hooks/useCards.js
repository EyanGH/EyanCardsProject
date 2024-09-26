import { useCallback, useState, useEffect } from "react";
import { useSnack } from "../../providers/SnackbarProvider";
import axios from "axios";
import useAxios from "../../hooks/useAxios";
import { editCard } from "../services/cardsApiService";
import { useNavigate, useLocation } from "react-router-dom"; 
import normalizeCard from "../helpers/normalization/normalizeCard";
import ROUTES from "../../routes/routesModel";

export default function useCards() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [card, setCard] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const setSnack = useSnack();
  const navigate = useNavigate();
  const location = useLocation(); 
  useAxios();

 
  const getQueryParams = () => {
    const searchParams = new URLSearchParams(location.search);
    return {
      title: searchParams.get("title") || "", 
    };
  };


  const getAllCards = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
      );
      const cardsData = response.data;
      setCards(cardsData);
      setFilteredCards(cardsData); 

      setSnack("success", "All cards are here!");
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  }, [setSnack]);

  
  useEffect(() => {
    const { title } = getQueryParams(); 
    if (title) {
      const filtered = cards.filter((card) =>
        card.title.toLowerCase().includes(title.toLowerCase())
      );
      setFilteredCards(filtered); 
    } else {
      setFilteredCards(cards); 
    }
  }, [location.search, cards]); 

  const getCardById = useCallback(async (id) => {
    try {
      const response = await axios.get(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`
      );
      const data = response.data;
      setCard(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const handleDelete = useCallback((id) => {
    console.log("Card " + id + " deleted");
  }, []);

  const handleLike = useCallback((id) => {
    console.log("Card " + id + " has been liked");
  }, []);

  const handleUpdateCard = useCallback(
    async (cardId, cardFromClient) => {
      setIsLoading(true);

      try {
        const card = await editCard(cardId, normalizeCard(cardFromClient));
        setCard(card);
        setSnack("success", "The business card has been successfully updated");
        setTimeout(() => {
          navigate(ROUTES.ROOT);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setSnack, navigate]
  );

  return {
    cards: filteredCards, 
    card,
    error,
    isLoading,
    getAllCards,
    getCardById,
    handleDelete,
    handleLike,
    handleUpdateCard,
  };
}
