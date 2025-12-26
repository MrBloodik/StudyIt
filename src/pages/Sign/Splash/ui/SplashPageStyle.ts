import { Dimensions, Platform, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    bottom: height * 0.1,
  },

  body: {
    bottom: height * 0.05,
    width: "100%",
    alignItems: "center",
  },
  title: {
    width: "80%",
    position: "absolute",
    bottom: height * 0.1,
    textAlign: "center",
    fontSize: width * 0.18,
    fontFamily: "KingsmanHandRegular",
    textShadowColor: "#00000025",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  subtitle: {
    width: "90%",
    position: "absolute",
    bottom: height * 0.05,
    textAlign: "center",
    fontSize: width * 0.038,
    fontStyle: "italic",
    color: "#515151",
    lineHeight: width * 0.055,
    textShadowColor: "#00000025",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },

  footer: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 25,
  },
  btn: {
    paddingVertical: height * 0.018,
  },
  btnText: {
    fontSize: width * 0.042,
    fontFamily: "InterSemiBold",
  },
  btnSignUp: {
    backgroundColor: "#FFF",
    borderWidth: 1.5,
    borderColor: "#E0E0E0",
  },
  btnTextSignUp: {
    color: "#000",
  },
  btnSignIn: {},
  btnTextSingIn: {
    color: "#FFF",
  },

  ...Platform.select({
    ios: {
      shadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
      },
    },
    android: {
      shadow: {
        elevation: 6,
      },
    },
  }),
});
