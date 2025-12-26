import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  footer: {
    gap: 10,
    paddingBottom: 10,
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

  anotherSignText: {
    fontFamily: "InterRegular",
    textAlign: "center",
    color: "#00000070",
    fontSize: width * 0.035,
  },
  signText: {
    paddingTop: 10,
    color: "#00000075",
    textAlign: "center",
    fontSize: width * 0.035,
  },
  signLink: {
    fontFamily: "InterSemiBold",
    color: "#000",
  },
});
