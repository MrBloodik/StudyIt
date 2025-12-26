import { Dimensions, Platform, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 30,
  },

  content: {
    justifyContent: "center",
    gap: 20,
  },

  header: {
    gap: 5,
  },
  title: {
    top: -20,
    textAlign: "center",
    fontSize: width * 0.075,
    fontFamily: "PlayfairDisplayBlack",
    textShadowColor: "#00000025",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subTitle: {
    top: -20,
    textAlign: "center",
    fontSize: width * 0.038,
    fontFamily: "InterRegular",
    color: "#00000095",
    textShadowColor: "#00000025",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },

  body: {
    gap: 10,
  },

  btn: {
    marginTop: 15,
    paddingHorizontal: width * 0.14,
    paddingVertical: height * 0.015,
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
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
      },
    },
    android: {
      shadow: {
        elevation: 6,
      },
    },
  }),
});
