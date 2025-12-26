import { UserEntity } from "@entities/user/userEntity";
import { create } from "zustand";

const useUserStore = create<UserEntity>((set) => ({
  email: "",
  password: "",
  resetCode: "",
  resetCodeCorrected: null,
  resetCodeStatus: "IDLE",

  setEmail: (email) => set(() => ({ email })),
  setPassword: (password) => set(() => ({ password })),
  setResetCode: (resetCode) => set(() => ({ resetCode })),
  setResetCodeCorrected: (resetCodeCorrected) =>
    set(() => ({ resetCodeCorrected })),
  setResetCodeStatus: (resetCodeStatus) => set(() => ({ resetCodeStatus })),
}));

export default useUserStore;
