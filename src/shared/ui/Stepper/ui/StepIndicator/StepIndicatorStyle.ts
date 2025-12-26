import { StyleSheet } from "react-native";

export default StyleSheet.create({
  stepIndicator: {
    position: "relative",
  },
  stepIndicatorInner: {
    height: 32, // 2rem
    width: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
  activeDot: {
    height: 12, // 0.75rem
    width: 12,
    borderRadius: 999,
    backgroundColor: "#fff",
  },
  stepNumber: {
    fontSize: 14, // 0.875rem
    fontWeight: "600",
  },

  // check-icon (подойдёт для <Image> или иконки)
  checkIcon: {
    height: 16, // 1rem
    width: 16,
    // цвет иконки управляется через сам компонент иконки (например, color prop)
  },
});
