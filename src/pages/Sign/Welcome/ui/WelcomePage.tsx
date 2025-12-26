import React, { useEffect } from "react";
import { Dimensions, Text, View } from "react-native";
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
import { navigate } from "@shared/lib/navigate";
import { SimpleButton } from "@shared/ui/Button";

import useWelcomeAnimations from "./useWelcomeAnimations";
import s from "./WelcomePageStyle";

export const Welcome = () => {
  const AnimatedS = useWelcomeAnimations();
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

  const animatedButtonStyle = useAnimatedStyle(() => ({
    elevation: combinedScale.value,
    transform: [{ scale: combinedScale.value }],
  }));

  const onPress = async () => {
    navigate("Splash");
  };

  return (
    <View style={s.container}>
      <Animated.View style={[s.header, AnimatedS.header]}>
        <AnalyticsCharacterAnimation size={size} loop autoPlay />
      </Animated.View>

      <View style={s.body}>
        <Animated.Text style={[s.title, AnimatedS.title]}>
          Единственное приложение для учебы которое тебе нужно!
        </Animated.Text>
        <Animated.Text style={[s.subtitle, AnimatedS.subtitle]}>
          Следи за оценками! Узнавай домашнее задание! Борись в таблице лидеров!
        </Animated.Text>
      </View>

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
    </View>
  );
};
