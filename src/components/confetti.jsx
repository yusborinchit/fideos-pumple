import ConfettiGenerator from "confetti-js";
import { useEffect } from "react";

export default function Confetti({ isTargetDay }) {
  useEffect(() => {
    if (!isTargetDay) return;

    const confettiSettings = { target: "my-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, [isTargetDay]);

  return (
    <canvas
      id="my-canvas"
      className="absolute inset-0 w-full h-full pointer-events-none"
    ></canvas>
  );
}
