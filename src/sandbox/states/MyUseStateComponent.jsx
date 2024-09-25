import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

export default function MyUseStateComponent() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <Button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        click
      </Button>
      <Typography>{toggle ? "Hello" : "Bye"}</Typography>
    </div>
  );
}
