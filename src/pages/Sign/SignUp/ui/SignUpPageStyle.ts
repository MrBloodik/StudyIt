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
  },

  body: {
    gap: 10,
  },
  inputContainer: {
    gap: 10,
  },
  inputField: {
    gap: 6,
  },
  inputWrapper: {
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  input: {
    padding: 14,
    fontSize: width * 0.038,
    backgroundColor: "#fff",
    borderWidth: 0,
    borderRadius: 10,
  },
  inputText: {
    fontSize: width * 0.038,
  },
  inputFieldShadow: {
    width: "100%",
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
  loginText: {
    paddingTop: 10,
    color: "#00000075",
    textAlign: "center",
    fontSize: width * 0.035,
  },
  loginLink: {
    fontFamily: "InterSemiBold",
    color: "#000",
  },

  footer: {
    gap: 10,
    paddingBottom: 10,
  },
  anotherLoginText: {
    fontFamily: "InterRegular",
    textAlign: "center",
    color: "#00000070",
    fontSize: width * 0.035,
  },
  socialsContainer: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  social: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D8DADC",
  },
  socialIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
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
