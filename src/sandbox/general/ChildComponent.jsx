import { Typography } from "@mui/material";
import React from "react";

export default function ChildComponent({ x, children }) {
  return (
    <div>
      {x}
      {children}
      <Typography>This is child component</Typography>
    </div>
  );
}
