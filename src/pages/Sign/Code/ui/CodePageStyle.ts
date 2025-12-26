import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 30,
    justifyContent: "flex-start",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  body: {
    gap: 10,
    flex: 1,
    justifyContent: "flex-start",
    top: height * 0.25,
  },
  textContainer: {
    textAlign: "left",
    top: -30,
  },
  title: {
    fontSize: width * 0.075,
    fontFamily: "PoppinsBold",
    textShadowColor: "#00000025",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  subTitle: {
    fontSize: width * 0.038,
    fontFamily: "InterRegular",
    color: "#00000080",
    top: -10,
  },
  email: {
    color: "#000",
    fontFamily: "InterSemiBold",
  },

  footer: {},
  sendCodeAgainText: {
    textAlign: "center",
    fontSize: width * 0.037,
    fontFamily: "InterSemiBold",
    color: "#000",
    marginTop: "auto",
  },
  timerText: {
    textAlign: "center",
    fontSize: width * 0.035,
    fontFamily: "InterRegular",
    color: "#000",
    marginTop: "auto",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  blurBackground: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
});
