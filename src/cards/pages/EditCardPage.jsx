import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import useCards from "../hooks/useCards";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/cardSchema";
import mapCardToModel from "../helpers/normalization/mapToModel";
import normalizeCard from "../helpers/normalization/normalizeCard";
import CardComponent from "../components/card/CardComponent";

export default function EditCardPage() {
  const { id } = useParams();
  const { handleUpdateCard, getCardById, card } = useCards();
  const {
    data,
    errors,
    setData,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
  } = useForm(initialCardForm, cardSchema, (data) =>
    handleUpdateCard(id, data)
  );

  useEffect(() => {
    if (card) {
      setData(mapCardToModel(card));
    } else {
      getCardById(id);
    }
  }, [card]);

  return (
    <div>
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardForm
          title="edit card"
          onSubmit={onSubmit}
          onReset={handleReset}
          errors={errors}
          validateForm={validateForm}
          onInputChange={handleChange}
          data={data}
        />
        {card && (
          <CardComponent
            card={{ _id: id, ...normalizeCard(data) }}
            handleDelete={() => {}}
            handleEdit={() => {}}
            handleLike={() => {}}
          />
        )}
      </Container>
    </div>
  );
}
