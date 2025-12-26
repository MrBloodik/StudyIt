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

  header: {
    justifyContent: "center",
    alignItems: "center",
  },

  body: {
    gap: 10,
  },
  title: {
    textAlign: "center",
    fontSize: width * 0.06,
    fontFamily: "InterSemiBold",
    textShadowColor: "#00000025",
  },
  subTitle: {
    textAlign: "center",
    fontSize: width * 0.035,
    fontFamily: "InterSemiBold",
    textShadowColor: "#00000080",
  },

  footer: {},
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
