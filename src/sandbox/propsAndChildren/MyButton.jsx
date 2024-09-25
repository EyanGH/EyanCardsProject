import { Button } from "@mui/material";
import React from "react";

export default function MyButton({ children, onClick }) {
  return (
    <Button
      sx={{
        color: "white",
        backgroundColor: "#4caf50",
        "&:hover": { backgroundColor: "#45a049" },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
