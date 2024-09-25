import React from "react";
import { Route, Routes } from "react-router-dom";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import ROUTES from "./routesModel";
import FavoriteCards from "../cards/pages/FavoriteCards";
import LoginPage from "../users/pages/LoginPage";
import MyCardsPage from "../cards/pages/MyCardsPage";
import SandboxPage from "../sandbox/SandboxPage";
import SignupPage from "../users/pages/SignupPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import EditCardPage from "../cards/pages/EditCardPage";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavoriteCards />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.CARD_INFO + "/:id"} element={<CardDetailsPage />} />
      <Route path={ROUTES.EDIT_CARD + "/:id"} element={<EditCardPage />} />
      <Route path={ROUTES.SANDBOX} element={<SandboxPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
