import { Dimensions, Platform, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {},

  body: {
    bottom: height * 0.05,
    width: "100%",
    alignItems: "center",
  },
  title: {
    width: "80%",
    textAlign: "center",
    fontSize: width * 0.08,
    fontFamily: "PlayfairDisplayBlack",
  },
  subtitle: {
    width: "90%",
    top: height * 0.01,
    textAlign: "center",
    fontSize: width * 0.035,
    color: "#555555",
  },
  ...Platform.select({
    ios: {
      shadow: {},
    },
    android: {
      shadow: {
        elevation: 20,
        textShadowOffset: { width: 0, height: 3 },
        textShadowRadius: 6,
      },
    },
  }),

  footer: {},
  btn: {
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.015,
  },
  btnText: {
    fontSize: width * 0.04,
    color: "#fff",
  },
});
