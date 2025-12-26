import { useSpringStyle } from "@shared/lib/animate";

const useSignInAnimations = () => ({
  header: useSpringStyle({
    translateY: {
      from: 100,
      to: 0,
      springConfig: { stiffness: 1380, damping: 270, mass: 35 },
    },
    scale: { from: 0, to: 1 },
  }),
  btnSignUp: useSpringStyle({
    translateY: {
      from: 100,
      to: 0,
      springConfig: { stiffness: 1380, damping: 270, mass: 20 },
    },
    scale: { from: 0, to: 1 },
    delay: 900,
  }),
});

export default useSignInAnimations;
