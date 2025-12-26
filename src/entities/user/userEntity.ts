import type { Status } from "@shared/constants";

export interface UserEntity {
  email: string;
  password: string;
  resetCode: string | null;
  resetCodeCorrected: boolean | null;
  resetCodeStatus: Status;

  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setResetCode: (resetCode: string) => void;
  setResetCodeCorrected: (resetCodeCorrected: boolean) => void;
  setResetCodeStatus: (resetCodeStatus: Status) => void;
}
