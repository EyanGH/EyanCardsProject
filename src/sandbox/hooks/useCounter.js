import { useCallback, useState } from "react";

export default function useCounter(initialValue = 0, jump = 1) {
  const [counter, setCounter] = useState(initialValue);
  const [jumps, setJumps] = useState(jump);

  const increment = useCallback(() => {
    setCounter((prev) => prev + jumps);
  }, [jumps]);

  const decrement = useCallback(() => {
    setCounter((prev) => prev - jumps);
  }, [jumps]);

  const handleReset = useCallback(() => {
    setCounter(initialValue);
    setJumps(jump);
  }, []);

  const handleChangeJumps = useCallback((newJumps) => {
    setJumps(newJumps);
  }, []);

  return {
    counter,
    jumps,
    increment,
    decrement,
    handleReset,
    handleChangeJumps,
  };
}
