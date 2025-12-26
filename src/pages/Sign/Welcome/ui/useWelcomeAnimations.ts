import { useSpringStyle } from "@shared/lib/animate";
import { Easing } from "react-native-reanimated";

const useWelcomeAnimations = () => ({
  header: useSpringStyle({
    translateY: {
      from: -100,
      to: 0,
      springConfig: { stiffness: 1380, damping: 270, mass: 35 },
    },
    scale: { from: 0, to: 1 },
    triggerOnFocus: true,
  }),
  title: useSpringStyle({
    translateX: {
      from: 100,
      to: 0,
      springConfig: { stiffness: 1380, damping: 270, mass: 20 },
    },
    scale: { from: 0, to: 1 },
    opacity: { from: 0, to: 1, duration: 600, easing: Easing.ease },
    delay: 600,
    triggerOnFocus: true,
  }),
  subtitle: useSpringStyle({
    translateX: {
      from: -100,
      to: 0,
      springConfig: { stiffness: 1380, damping: 270, mass: 20 },
    },
    scale: { from: 0, to: 1 },
    opacity: { from: 0, to: 1, duration: 600, easing: Easing.ease },
    delay: 800,
    triggerOnFocus: true,
  }),
  footer: useSpringStyle({
    translateY: {
      from: 100,
      to: 0,
      springConfig: { stiffness: 1380, damping: 270, mass: 20 },
    },
    scale: { from: 0, to: 1 },
    delay: 1000,
    triggerOnFocus: true,
  }),
});

export default useWelcomeAnimations;
