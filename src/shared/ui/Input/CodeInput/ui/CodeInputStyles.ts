import { StyleSheet } from "react-native";

export const CELL_COUNT = 4;
export const CELL_SIZE = 70;
export const CELL_BORDER_RADIUS = 15;
export const DEFAULT_CELL_BG_COLOR = "#fff";
export const ACTIVE_CELL_BG_COLOR = "#f7fafe";
export const NOT_EMPTY_CELL_BG_COLOR = "#8832FF";
export const CORRECT_CELL_BG_COLOR = ["#4ad66d", "#4ad66d"];
export const ERROR_CELL_BG_COLOR = ["#ff3b30", "#ff3b30"];

export default StyleSheet.create({
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,

    borderRadius: CELL_BORDER_RADIUS,
    color: "#3759b8",
    backgroundColor: "#fff",

    // IOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  cellText: {
    fontSize: 30,
    lineHeight: CELL_SIZE - 5,
    textAlign: "center",
  },
});
