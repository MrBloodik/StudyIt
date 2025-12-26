import { Dimensions, Platform, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
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
    textShadowColor: "#00000025",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
  subtitle: {
    width: "90%",
    top: height * 0.01,
    textAlign: "center",
    fontSize: width * 0.035,
    color: "#555555",
    textShadowColor: "#00000025",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  footer: {},
  btn: {
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.015,
  },
  btnText: {
    fontSize: width * 0.04,
    color: "#fff",
  },

  ...Platform.select({
    ios: {
      shadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
      },
    },
    android: {
      shadow: {
        elevation: 5,
      },
    },
  }),
});
