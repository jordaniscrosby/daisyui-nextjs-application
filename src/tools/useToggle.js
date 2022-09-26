import { useState } from "react";

export default function useToggle(initialState) {
  // State and setters for debounced value
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState((prev) => !prev);
  };
  return [state, toggle];
}
