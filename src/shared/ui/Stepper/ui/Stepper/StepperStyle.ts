import { Dimensions, Platform, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

// Брейкпоинты как в исходном CSS (в dp)
const ASPECT_RATIO = width >= 768 ? 2 / 1 : width >= 640 ? 4 / 3 : undefined;

export default StyleSheet.create({
  outerContainer: {
    flex: 1,
    minHeight: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 16, // ~1rem
    ...(ASPECT_RATIO ? { aspectRatio: ASPECT_RATIO } : {}), // применится только при больших ширинах
  },

  stepCircleContainer: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 28 * 16, // 28rem * 16 = 448
    borderRadius: 32, // 2rem
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.1,
        shadowRadius: 25,
      },
      android: {
        elevation: 6,
      },
      default: {},
    }),
    backgroundColor: "#fff",
  },

  stepIndicatorRow: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 32, // 2rem
  },

  // step-content-default
  stepContentDefault: {
    position: "relative",
    overflow: "hidden",
  },

  // step-default
  stepDefault: {
    paddingLeft: 32,
    paddingRight: 32,
  },

  // footer-container
  footerContainer: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 32,
  },

  // footer-nav
  footerNav: {
    marginTop: 40, // 2.5rem
    flexDirection: "row",
    alignItems: "center",
  },
  footerNavSpread: {
    justifyContent: "space-between",
  },
  footerNavEnd: {
    justifyContent: "flex-end",
  },

  backButton: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  backButtonText: {
    color: "#a3a3a3",
  },
  backButtonInactive: {
    opacity: 0.5,
  },

  // next-button
  nextButton: {
    borderRadius: 999,
    backgroundColor: "#5227ff",
    paddingVertical: 6, // ~0.375rem
    paddingHorizontal: 14, // ~0.875rem
    alignItems: "center",
    justifyContent: "center",
  },
  nextButtonText: {
    color: "#fff",
    fontWeight: "600",
    letterSpacing: -0.4, // небольшая корреция вместо -0.025em
  },

  // step-indicator
  stepIndicator: {
    position: "relative",
  },
  stepIndicatorInner: {
    height: 32, // 2rem
    width: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
  activeDot: {
    height: 12, // 0.75rem
    width: 12,
    borderRadius: 999,
    backgroundColor: "#fff",
  },
  stepNumber: {
    fontSize: 14, // 0.875rem
    fontWeight: "600",
  },

  // step-connector
  stepConnector: {
    position: "relative",
    marginLeft: 8,
    marginRight: 8,
    height: 2, // 0.125rem
    flex: 1,
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#52525b",
  },
  stepConnectorInner: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    // ширину контролируйте программно (например, ширина прогресса в %)
    width: "0%",
    backgroundColor: "#5227ff",
  },

  // check-icon (подойдёт для <Image> или иконки)
  checkIcon: {
    height: 16, // 1rem
    width: 16,
    // цвет иконки управляется через сам компонент иконки (например, color prop)
  },
});
