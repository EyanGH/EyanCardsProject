import { Container } from "@mui/material";
import CardForm from "../components/CardForm";
import useCards from "../hooks/useCards";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/cardSchema";

export default function AddCardPage() {
  const { handleCreate } = useCards();
  const {
    data,
    errors,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
  } = useForm(initialCardForm, cardSchema, handleCreate);

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
          title="create card"
          onSubmit={onSubmit}
          onReset={handleReset}
          errors={errors}
          validateForm={validateForm}
          onInputChange={handleChange}
          data={data}
        />
      </Container>
    </div>
  );
}
