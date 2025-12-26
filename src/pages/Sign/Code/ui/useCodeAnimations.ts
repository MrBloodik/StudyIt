import { useSpringStyle } from "@shared/lib/animate";
import { Easing } from "react-native-reanimated";

const useCodeAnimations = () => ({
  title: useSpringStyle({
    translateY: {
      from: 100,
      to: 0,
      springConfig: { stiffness: 1000, damping: 150, mass: 10 },
    },
    scale: { from: 0, to: 1 },
    delay: 300,
  }),
  subtitle: useSpringStyle({
    translateY: {
      from: 100,
      to: 0,
      springConfig: { stiffness: 1000, damping: 150, mass: 5 },
    },
    scale: { from: 0, to: 1 },
    opacity: { from: 0, to: 1, duration: 600, easing: Easing.ease },
    delay: 500,
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

export default useCodeAnimations;
