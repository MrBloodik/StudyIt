import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  StepConnector: {
    position: "relative",
    marginLeft: 0.5 * width,
    marginRight: 0.5 * width,
    height: 0.125 * width,
    flex: 1,
    overflow: "hidden",
    borderRadius: 0.25 * width,
    backgroundColor: "#52525b",
  },

  StepConnectorInner: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
  },
});
