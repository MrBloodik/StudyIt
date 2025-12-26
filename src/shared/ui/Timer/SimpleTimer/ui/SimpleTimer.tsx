import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import calculateTimeRemaining from "../../lib/calculateTimeRemaining";
import { SimpleTimerProps } from "../model/types";

export const SimpleTimer = ({ endDate, styles }: SimpleTimerProps) => {
  const [time, setTime] = useState<number>(calculateTimeRemaining(endDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingTime = calculateTimeRemaining(endDate);
      setTime(remainingTime);

      if (remainingTime <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  const formatTime = (timeInSeconds: number): string => {
    const days = Math.floor(timeInSeconds / (24 * 60 * 60));
    const hours = Math.floor((timeInSeconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    let timeArray: string[] = [];
    if (days > 0) timeArray.push(days.toString());
    if (hours > 0 || days > 0) timeArray.push(hours.toString());
    if (minutes > 0 || hours > 0 || days > 0)
      timeArray.push(minutes.toString());
    timeArray.push(seconds.toString());

    return timeArray.map((unit) => String(unit).padStart(2, "0")).join(":");
  };

  return (
    <View>
      <Text style={{ fontSize: 15, ...styles }}>{formatTime(time)}</Text>
    </View>
  );
};
