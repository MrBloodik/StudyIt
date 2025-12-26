import { useSpringStyle } from "@shared/lib/animate";
import { Easing } from "react-native-reanimated";

const useSplashAnimations = () => ({
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
    translateY: {
      from: 100,
      to: 0,
      springConfig: { stiffness: 1380, damping: 270, mass: 20 },
    },
    scale: { from: 0, to: 1 },
    opacity: { from: 0, to: 1, duration: 600, easing: Easing.ease },
    delay: 400,
    triggerOnFocus: true,
  }),
  subtitle: useSpringStyle({
    translateY: {
      from: -100,
      to: 0,
      springConfig: { stiffness: 1380, damping: 270, mass: 20 },
    },
    scale: { from: 0, to: 1 },
    opacity: { from: 0, to: 1, duration: 600, easing: Easing.ease },
    delay: 600,
    triggerOnFocus: true,
  }),
  btnSignUp: useSpringStyle({
    translateY: {
      from: -100,
      to: 0,
      springConfig: { stiffness: 1380, damping: 170, mass: 30 },
    },
    scale: { from: 0, to: 1 },
    delay: 1000,
    triggerOnFocus: true,
  }),
  btnSignIn: useSpringStyle({
    translateY: {
      from: 100,
      to: 0,
      springConfig: { stiffness: 1200, damping: 200, mass: 15 },
    },
    scale: { from: 0, to: 1 },
    delay: 1200,
    triggerOnFocus: true,
  }),
});

export default useSplashAnimations;
