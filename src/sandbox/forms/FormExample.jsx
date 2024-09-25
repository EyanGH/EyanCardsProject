import { Button, Container, TextField } from "@mui/material";
import Joi from "joi";
import React, { useCallback, useState } from "react";
import useForm from "../../forms/hooks/useForm";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";

const initialForm = {
  firstName: "",
  lastName: "",
};

const schema = {
  firstName: Joi.string().min(2),
  lastName: Joi.string().min(2).max(12),
};
const printSomething = (something) => {
  console.log(something);
};

export default function FormExample() {
  const { data, errors, handleChange, validateForm, onSubmit, handleReset } =
    useForm(initialForm, schema, printSomething);

  return (
    <Container
      sx={{
        pt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        title="Example form"
        onSubmit={onSubmit}
        onReset={handleReset}
        styles={{ maxWidth: "450px" }}
        validateForm={validateForm}
      >
        <Input
          label="first name"
          name="firstName"
          data={data}
          error={errors.firstName}
          onChange={handleChange}
        />

        <Input
          label="last name"
          name="lastName"
          data={data}
          error={errors.lastName}
          onChange={handleChange}
        />
      </Form>
    </Container>
  );
}
