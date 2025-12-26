import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  inputField: {
    gap: 6,
  },
  input: {
    padding: 14,
    fontSize: width * 0.035,
    backgroundColor: "#fff",
    borderWidth: 0,
    borderRadius: 10,
  },
  inputText: {
    fontSize: width * 0.038,
  },

  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});
