import { useCallback, useState, useEffect } from "react";
import { useSnack } from "../../providers/SnackbarProvider";
import axios from "axios";
import useAxios from "../../hooks/useAxios";
import { editCard } from "../services/cardsApiService";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation for query params
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
  const location = useLocation(); // Access the current URL and query params
  useAxios();

  // Function to extract query params
  const getQueryParams = () => {
    const searchParams = new URLSearchParams(location.search);
    return {
      title: searchParams.get("title") || "", // Get "title" query param or set an empty string if not found
    };
  };

  // Get all cards from API
  const getAllCards = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
      );
      const cardsData = response.data;
      setCards(cardsData);
      setFilteredCards(cardsData); // Set the initial state of filtered cards to all cards

      setSnack("success", "All cards are here!");
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  }, [setSnack]);

  // UseEffect to filter cards based on title query param
  useEffect(() => {
    const { title } = getQueryParams(); // Get the title from query params

    if (title) {
      const filtered = cards.filter((card) =>
        card.title.toLowerCase().includes(title.toLowerCase())
      );
      setFilteredCards(filtered); // Set filtered cards
    } else {
      setFilteredCards(cards); // If no title, show all cards
    }
  }, [location.search, cards]); // Re-run this effect when query param or cards change

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
    cards: filteredCards, // Return filteredCards instead of cards
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
