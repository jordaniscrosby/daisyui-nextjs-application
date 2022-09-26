import { useState } from "react";

export default function useMouseOver() {
  const [isHovered, setHovered] = useState(false);
  const handleOver = () => {
    setHovered(true);
  };
  const handleOff = () => setHovered(false);

  return [isHovered, handleOver, handleOff];
}
