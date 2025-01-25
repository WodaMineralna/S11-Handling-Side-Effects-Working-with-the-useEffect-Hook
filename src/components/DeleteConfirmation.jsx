import { useState, useEffect } from "react";

const TIMER_MS = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTimer, setRemainingTimer] = useState(TIMER_MS)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('INTERVAL - 1OMS');
      setRemainingTimer(prevTime => prevTime - 10)
    }, 10)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    console.log('TIMER SET');
    const timer = setTimeout(() => {
      onConfirm()
    }, TIMER_MS)
    
    return () => {
      console.log('Cleaning up timer');
      clearTimeout(timer)
    }
  }, [onConfirm])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTimer} max={TIMER_MS} />
    </div>
  );
}
