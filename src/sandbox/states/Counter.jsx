import { Button, MenuItem, Select, Typography } from "@mui/material";
import React, { useCallback } from "react";
import useCounter from "../hooks/useCounter";

export default function Counter() {
  let { counter, jumps, increment, decrement, handleReset, handleChangeJumps } =
    useCounter();

  return (
    <div>
      <Typography>{counter}</Typography>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Select
        value={jumps}
        label="Jumps"
        onChange={(e) => handleChangeJumps(e.target.value)}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
      </Select>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
}
