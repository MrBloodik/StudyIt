import React from "react";
import { Dimensions, Text } from "react-native";

import { SplashCatAnimation } from "@shared/assets/animations/Lottie/ui";
import { useSpringStyle } from "@shared/lib/animate";
import { navigate } from "@shared/lib/navigate";
import { SimpleButton } from "@shared/ui";
import Animated, { Easing } from "react-native-reanimated";
import s from "./SplashPageStyle";

export const Splash = () => {
  const { width } = Dimensions.get("window");
  const size = width * 1.5;

  const AnimatedSimpleButton = Animated.createAnimatedComponent(SimpleButton);

  const onPressSignUp = () => {
    navigate("SignUp");
  };

  const onPressSignIn = () => {
    navigate("SignIn");
  };

  const AnimatedS = {
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
  };

  return (
    <Animated.View style={s.container}>
      <Animated.View style={[s.header, AnimatedS.header]}>
        <SplashCatAnimation autoPlay loop size={size} />
      </Animated.View>

      <Animated.View style={s.body}>
        <Animated.Text style={[s.title, s.shadow, AnimatedS.title]}>
          StudyIt
        </Animated.Text>
        <Animated.Text style={[s.subtitle, s.shadow, AnimatedS.subtitle]}>
          Присоединяйся к StudyIt! Сделай обучение незабываемым!
        </Animated.Text>
      </Animated.View>

      <Animated.View style={s.footer}>
        <AnimatedSimpleButton
          bgColor={"#EEEEEE"}
          centered
          bRad={12}
          style={[s.btn, s.shadow, s.btnSignUp, AnimatedS.btnSignUp]}
          onPress={onPressSignUp}
        >
          <Text style={[s.btnText, s.btnTextSignUp]}>Создать аккаунт</Text>
        </AnimatedSimpleButton>

        <AnimatedSimpleButton
          bgColor={"#000"}
          centered
          bRad={12}
          style={[s.btn, s.shadow, AnimatedS.btnSignIn]}
          onPress={onPressSignIn}
        >
          <Text style={[s.btnText, s.btnTextSingIn]}>Войти</Text>
        </AnimatedSimpleButton>
      </Animated.View>
    </Animated.View>
  );
};
