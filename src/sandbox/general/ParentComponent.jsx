import React from "react";
import ChildComponent from "./ChildComponent";
import { Button, Typography } from "@mui/material";

export default function ParentComponent() {
  return (
    <div>
      <Typography>This is in parent component</Typography>

      <ChildComponent x="Hello">
        <Button>Clcik</Button>
      </ChildComponent>

      <ChildComponent>
        <Button>CLICK ME!!</Button>
      </ChildComponent>
    </div>
  );
}
