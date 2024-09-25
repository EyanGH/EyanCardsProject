import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";

export default function MyFormExample() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    let targetName = e.target.name;
    setData((prev) => ({ ...prev, [targetName]: e.target.value }));
  };

  return (
    <div>
      <Container sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <TextField
          label="First Name"
          name="firstName"
          vairant="outlined"
          value={data.firstName}
          onChange={handleChange}
        />
        <TextField
          label="Last Name"
          vairant="outlined"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
        />

        <TextField
          label="Phone"
          vairant="outlined"
          name="phone"
          value={data.phone}
          onChange={handleChange}
        />

        <TextField
          label="Email"
          vairant="outlined"
          name="email"
          value={data.email}
          onChange={handleChange}
        />

        <TextField
          label="Address"
          vairant="outlined"
          value={data.address}
          name="address"
          onChange={handleChange}
        />

        <Button variant="contained">Send</Button>
      </Container>
    </div>
  );
}
