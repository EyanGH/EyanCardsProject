import { Button } from "@mui/material";
import React from "react";

export default function EventComponent2() {
  return (
    <div>
      <Button
        onClick={(event) => {
          console.log(event.target.textContent);
        }}
      >
        Click me!!!
      </Button>
    </div>
  );
}
