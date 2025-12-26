import React from "react";
import { Dimensions, Text, View } from "react-native";
import Animated from "react-native-reanimated";

import { SplashCatAnimation } from "@shared/assets/animations/Lottie/ui";
import { navigate } from "@shared/lib/navigate";
import { SimpleButton } from "@shared/ui/Button";

import s from "./SplashPageStyle";
import useSplashAnimations from "./useSpalshAnimations";

export const Splash = () => {
  const AnimatedS = useSplashAnimations();
  const { width } = Dimensions.get("window");
  const size = width * 1.5;

  const AnimatedSimpleButton = Animated.createAnimatedComponent(SimpleButton);

  const onPressSignUp = () => {
    navigate("SignUp");
  };

  const onPressSignIn = () => {
    navigate("SignIn");
  };

  return (
    <View style={s.container}>
      <Animated.View style={[s.header, AnimatedS.header]}>
        <SplashCatAnimation autoPlay loop size={size} />
      </Animated.View>

      <View style={s.body}>
        <Animated.Text style={[s.title, AnimatedS.title]}>
          StudyIt
        </Animated.Text>
        <Animated.Text style={[s.subtitle, AnimatedS.subtitle]}>
          Присоединяйся к StudyIt! Сделай обучение незабываемым!
        </Animated.Text>
      </View>

      <View style={s.footer}>
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
      </View>
    </View>
  );
};
