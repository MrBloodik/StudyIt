const calculateTimeRemaining = (endDate: string): number => {
  const currentTime = Date.now();
  const end = new Date(endDate).getTime();
  const difference = end - currentTime;

  if (difference <= 0) return 0;

  return Math.floor(difference / 1000);
};

export default calculateTimeRemaining;
