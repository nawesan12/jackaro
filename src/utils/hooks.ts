import { useEffect, useState } from "react";

const useCountdown = (targetDate: string) => {
  const countDownDate = new Date(targetDate).getTime();

  const calculateTimeLeft = (countDown: number) => {
    const seconds = Math.floor(countDown / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    return {
      days,
      hours: hours % 24,
      minutes: minutes % 60,
      seconds: seconds % 60,
    };
  };

  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeft(countDownDate - new Date().getTime())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(countDownDate - new Date().getTime()));
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return timeLeft;
};

export { useCountdown };
