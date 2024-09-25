import { Box } from "@mui/material";
import React from "react";
export default function MyMessage({ children }) {
  return (
    <Box
      sx={{
        border: "1px solid black",
        backgroundColor: "#f8d7da",
        color: "green",
      }}
    >
      {children}
    </Box>
  );
}
