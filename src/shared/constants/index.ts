export const Status = {
  IDLE: "idle" as const,
  PENDING: "pending" as const,
  REJECTED: "rejected" as const,
  SUCCESS: "success" as const,
};

export type Status = keyof typeof Status;
