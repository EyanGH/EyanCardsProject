import { Button, TextField } from "@mui/material";
import React from "react";

export default function EventComponent() {
  const handleClick = () => {
    console.log("Hello world");
  };
  const handleClickWithData = (name) => {
    console.log("The name is " + name);
  };

  const handleEventClick = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        static function
      </Button>
      <Button variant="contained" onClick={() => handleClickWithData("Avi")}>
        function with args
      </Button>

      <Button variant="contained" onClick={handleEventClick}>
        Get The event
      </Button>

      <TextField
        onChange={(e) => console.log(e.target.value)}
        onMouseOver={() => {
          console.log("hello!!");
        }}
      />
    </div>
  );
}
