const TOKEN = "my token";
const FAVORITE_CARDS = "favoriteCards"; 


export const setTokenInLocalStorage = (jwtToken) => {
  localStorage.setItem(TOKEN, jwtToken);
};

export const removeToken = () => localStorage.removeItem(TOKEN);

export const getToken = () => localStorage.getItem(TOKEN);

export const getUser = () => {
  try {
    const myToken = getToken();
    return jwtDecode(myToken);
  } catch (err) {
    return null;
  }
};

export const setFavoriteCardsInLocalStorage = (favoriteCards) => {
  localStorage.setItem(FAVORITE_CARDS, JSON.stringify(favoriteCards));
};

export const getFavoriteCardsFromLocalStorage = () => {
  const storedFavorites = localStorage.getItem(FAVORITE_CARDS);
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

export const addCardToFavorites = (cardId) => {
  const favoriteCards = getFavoriteCardsFromLocalStorage();
  if (!favoriteCards.includes(cardId)) {
    favoriteCards.push(cardId);
    setFavoriteCardsInLocalStorage(favoriteCards);
  }
};

export const removeCardFromFavorites = (cardId) => {
  const favoriteCards = getFavoriteCardsFromLocalStorage();
  const updatedFavorites = favoriteCards.filter((id) => id !== cardId);
  setFavoriteCardsInLocalStorage(updatedFavorites);
};

export const isCardFavorited = (cardId) => {
  const favoriteCards = getFavoriteCardsFromLocalStorage();
  return favoriteCards.includes(cardId);
};
