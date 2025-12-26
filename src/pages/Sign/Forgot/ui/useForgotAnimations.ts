import { useSpringStyle } from "@shared/lib/animate";
import { Easing } from "react-native-reanimated";

const useForgotAnimations = () => ({
  header: useSpringStyle({
    translateY: {
      from: -100,
      to: 0,
      springConfig: { stiffness: 1380, damping: 270, mass: 35 },
    },
    scale: { from: 0, to: 1 },
  }),
  title: useSpringStyle({
    translateY: {
      from: 100,
      to: 0,
      springConfig: { stiffness: 1380, damping: 270, mass: 20 },
    },
    scale: { from: 0, to: 1 },
    delay: 500,
  }),
  subtitle: useSpringStyle({
    translateY: {
      from: 100,
      to: 0,
      springConfig: { stiffness: 1380, damping: 270, mass: 20 },
    },
    scale: { from: 0, to: 1 },
    opacity: { from: 0, to: 1, duration: 600, easing: Easing.ease },
    delay: 700,
  }),
  footer: useSpringStyle({
    translateY: {
      from: 100,
      to: 0,
      springConfig: { stiffness: 1380, damping: 270, mass: 20 },
    },
    scale: { from: 0, to: 1 },
    delay: 1000,
  }),
});

export default useForgotAnimations;
