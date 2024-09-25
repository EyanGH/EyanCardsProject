import { Button, Typography } from "@mui/material";
import React, { useCallback, useEffect, useMemo } from "react";
import { useState } from "react";
import SimpleComponent from "./SimpleComponent";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [age, setAge] = useState(100);

  const user = useMemo(() => {
    return {
      firstName: "Tzach",
      age: age,
    };
  }, [age]);

  const printSomething = useCallback(() => {
    console.log("Something");
  }, []);

  return (
    <div>
      <Typography>{counter}</Typography>
      <Button onClick={() => setCounter((prev) => prev + 1)}>+</Button>
      <Typography>{age}</Typography>
      <Button onClick={() => setAge((prev) => prev + 1)}>+</Button>
      <SimpleComponent user={user} printSomething={printSomething} />
    </div>
  );
}
