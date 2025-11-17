import React, { useEffect } from "react";
import { Dimensions, Text } from "react-native";
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { AnalyticsCharacterAnimation } from "@shared/assets/animations/Lottie/ui";
import { useSpringStyle } from "@shared/lib/animate";
import { navigate } from "@shared/lib/navigate";
import { SimpleButton } from "@shared/ui";

import s from "./WelcomePageStyle";

export const Welcome = () => {
  const { width } = Dimensions.get("window");
  const size = width;

  const AnimatedSimpleButton = Animated.createAnimatedComponent(SimpleButton);
  const buttonScale = useSharedValue(0);
  const pulseValueShadow = useSharedValue(0);
  const pulseValueScale = useSharedValue(1);
  const combinedScale = useDerivedValue(() => {
    return buttonScale.value * pulseValueScale.value;
  });

  useEffect(() => {
    buttonScale.value = withDelay(1500, withSpring(1));
    pulseValueShadow.value = withDelay(
      1500,
      withRepeat(
        withTiming(6, {
          duration: 800,
          reduceMotion: ReduceMotion.System,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      )
    );
    pulseValueScale.value = withDelay(
      1500,
      withRepeat(
        withTiming(1.1, {
          duration: 800,
          reduceMotion: ReduceMotion.System,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      )
    );
  }, [pulseValueShadow, pulseValueScale]);

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
  };

  const animatedButtonStyle = useAnimatedStyle(() => ({
    elevation: combinedScale.value,
    transform: [{ scale: combinedScale.value }],
  }));

  const onPress = async () => {
    navigate("Splash");
  };

  return (
    <Animated.View style={s.container}>
      <Animated.View style={[s.header, AnimatedS.header]}>
        <AnalyticsCharacterAnimation size={size} loop autoPlay />
      </Animated.View>

      <Animated.View style={s.body}>
        <Animated.Text style={[s.title, s.shadow, AnimatedS.title]}>
          Единственное приложение для учебы которое тебе нужно!
        </Animated.Text>
        <Animated.Text style={[s.subtitle, s.shadow, AnimatedS.subtitle]}>
          Следи за оценками! Узнавай домашнее задание! Борись в таблице лидеров!
        </Animated.Text>
      </Animated.View>

      <Animated.View style={[s.footer, AnimatedS.footer]}>
        <AnimatedSimpleButton
          bgColor={"#000"}
          centered
          bRad={20}
          onPress={onPress}
          style={[s.btn, s.shadow, animatedButtonStyle]}
        >
          <Text style={s.btnText}>Начнем!</Text>
        </AnimatedSimpleButton>
      </Animated.View>
    </Animated.View>
  );
};
