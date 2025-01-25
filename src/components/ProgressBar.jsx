import { useState, useEffect } from "react";

export default function ProgressBar({ timer_ms }) {
  const [remainingTimer, setRemainingTimer] = useState(timer_ms);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL - 1OMS");
      setRemainingTimer((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTimer} max={timer_ms} />;
}
