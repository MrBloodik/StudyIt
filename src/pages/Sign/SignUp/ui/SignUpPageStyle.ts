import { Dimensions, Platform, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 30,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    gap: 30,
  },

  header: {},
  title: {
    textAlign: "left",
    fontSize: width * 0.075,
    fontFamily: "PlayfairDisplayBlack",
    textShadowColor: "#00000025",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },

  body: {
    gap: 10,
  },

  btn: {
    marginTop: 15,
    paddingHorizontal: width * 0.15,
    paddingVertical: height * 0.02,
  },
  btnText: {
    fontSize: width * 0.0375,
    fontFamily: "InterSemiBold",
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
