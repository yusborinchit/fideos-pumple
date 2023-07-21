import { formattedUnit, isTheSameDay } from "@/utils/date";
import { useEffect, useMemo, useState } from "react";

export function useDate() {
  const [targetDate, setTargetDate] = useState(() => new Date(2024, 6, 20));
  const [currentDate, setCurrentDate] = useState(() => new Date(Date.now()));

  const difference = useMemo(() => {
    const targetDateInMS = targetDate.getTime();
    const currentDateInMS = currentDate.getTime();

    let difference = (targetDateInMS - currentDateInMS) / 1000;

    const differenceInDays = Math.floor(difference / 86400);
    difference -= differenceInDays * 86400;

    const differenceInHours = Math.floor(difference / 3600) % 24;
    difference -= differenceInHours * 3600;

    const differenceInMinutes = Math.floor(difference / 60) % 60;
    difference -= differenceInMinutes * 60;

    const differenceInSeconds = Math.floor(difference % 60);

    return {
      days: formattedUnit(differenceInDays),
      hours: formattedUnit(differenceInHours),
      minutes: formattedUnit(differenceInMinutes),
      seconds: formattedUnit(differenceInSeconds),
    };
  }, [currentDate, targetDate]);

  const isTargetDay = useMemo(() => {
    return isTheSameDay(currentDate, targetDate);
  }, [currentDate, targetDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date(Date.now());
      setCurrentDate(now);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return { targetDate, difference, isTargetDay };
}
