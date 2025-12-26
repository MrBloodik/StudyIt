import { create } from "zustand";

const useUiAuthStore = create<{
  showSuccessAnimation: boolean;
  setShowSuccessAnimation: (showSuccessAnimation: boolean) => void;
}>((set) => ({
  showSuccessAnimation: false,
  setShowSuccessAnimation: (showSuccessAnimation) =>
    set(() => ({ showSuccessAnimation })),
}));

export default useUiAuthStore;
