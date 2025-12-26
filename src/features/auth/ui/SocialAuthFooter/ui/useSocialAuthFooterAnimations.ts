import { useSpringStyle } from "@shared/lib/animate";

const useSocialAuthFooterAnimations = () => ({
  anotherSignText: useSpringStyle({
    translateY: {
      from: -100,
      to: 0,
      springConfig: { stiffness: 1380, damping: 270, mass: 20 },
    },
    scale: { from: 0, to: 1 },
    delay: 1200,
  }),
  googleIcon: useSpringStyle({
    translateX: {
      from: -100,
      to: 0,
      springConfig: { stiffness: 1000, damping: 170, mass: 20 },
    },
    scale: { from: 0, to: 1 },
    delay: 1400,
  }),
  maxIcon: useSpringStyle({
    translateY: {
      from: 100,
      to: 0,
      springConfig: { stiffness: 1380, damping: 270, mass: 20 },
    },
    scale: { from: 0, to: 1 },
    delay: 1400,
  }),
  appleIcon: useSpringStyle({
    translateX: {
      from: 100,
      to: 0,
      springConfig: { stiffness: 1000, damping: 170, mass: 20 },
    },
    scale: { from: 0, to: 1 },
    delay: 1400,
  }),
  signText: useSpringStyle({
    translateY: {
      from: 100,
      to: 0,
      springConfig: { stiffness: 1000, damping: 170, mass: 20 },
    },
    scale: { from: 0, to: 1 },
    delay: 1600,
  }),
});

export default useSocialAuthFooterAnimations;
