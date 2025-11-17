import React from "react";
import { Image, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Shadow } from "react-native-shadow-2";

import { AppleIcon, GoogleIcon, MaxIcon } from "@shared/assets/icons/socials";
import { SimpleButton } from "@shared/ui";
import Animated, { Easing } from "react-native-reanimated";

import { useSpringStyle } from "@shared/lib/animate";
import s from "./SignUpPageStyle";

export const SignUp = () => {
  const AnimatedS = {
    header: useSpringStyle({
      translateY: {
        from: 100,
        to: 0,
        springConfig: { stiffness: 1380, damping: 270, mass: 35 },
      },
      scale: { from: 0, to: 1 },
      triggerOnFocus: true,
    }),
    inputFieldEmail: useSpringStyle({
      translateY: {
        from: 100,
        to: 0,
        springConfig: { stiffness: 1000, damping: 170, mass: 30 },
      },
      scale: { from: 0, to: 1 },
      opacity: { from: 0, to: 1, duration: 600, easing: Easing.ease },
      delay: 400,
      triggerOnFocus: true,
    }),
    inputFieldPassword: useSpringStyle({
      translateY: {
        from: 100,
        to: 0,
        springConfig: { stiffness: 1000, damping: 170, mass: 30 },
      },
      scale: { from: 0, to: 1 },
      opacity: { from: 0, to: 1, duration: 600, easing: Easing.ease },
      delay: 500,
      triggerOnFocus: true,
    }),
    inputFieldConfirmPassword: useSpringStyle({
      translateY: {
        from: 100,
        to: 0,
        springConfig: { stiffness: 1000, damping: 170, mass: 30 },
      },
      scale: { from: 0, to: 1 },
      delay: 600,
      triggerOnFocus: true,
    }),
    btnSignUp: useSpringStyle({
      translateY: {
        from: 100,
        to: 0,
        springConfig: { stiffness: 1380, damping: 270, mass: 20 },
      },
      scale: { from: 0, to: 1 },
      delay: 900,
      triggerOnFocus: true,
    }),
    anotherLoginText: useSpringStyle({
      translateY: {
        from: -100,
        to: 0,
        springConfig: { stiffness: 1380, damping: 270, mass: 20 },
      },
      scale: { from: 0, to: 1 },
      delay: 1200,
      triggerOnFocus: true,
    }),
    googleIcon: useSpringStyle({
      translateX: {
        from: -100,
        to: 0,
        springConfig: { stiffness: 1000, damping: 170, mass: 20 },
      },
      scale: { from: 0, to: 1 },
      delay: 1400,
      triggerOnFocus: true,
    }),
    maxIcon: useSpringStyle({
      translateY: {
        from: 100,
        to: 0,
        springConfig: { stiffness: 1380, damping: 270, mass: 20 },
      },
      scale: { from: 0, to: 1 },
      delay: 1400,
      triggerOnFocus: true,
    }),
    appleIcon: useSpringStyle({
      translateX: {
        from: 100,
        to: 0,
        springConfig: { stiffness: 1000, damping: 170, mass: 20 },
      },
      scale: { from: 0, to: 1 },
      delay: 1400,
      triggerOnFocus: true,
    }),
  };

  return (
    <Animated.View style={s.container}>
      <Animated.View style={s.content}>
        <Animated.View style={[s.header, AnimatedS.header]}>
          <Text style={[s.title, s.shadow]}>Регистрация</Text>
        </Animated.View>

        <Animated.View style={s.body}>
          <Animated.View style={s.inputContainer}>
            <Animated.View style={[s.inputField, AnimatedS.inputFieldEmail]}>
              <Text style={s.inputText}>Почта</Text>
              <Shadow style={s.inputFieldShadow} startColor={"#00000010"}>
                <TextInput
                  style={s.input}
                  placeholder="example@gmail.com"
                  keyboardType="email-address"
                />
              </Shadow>
            </Animated.View>
            <Animated.View style={[s.inputField, AnimatedS.inputFieldPassword]}>
              <Text style={s.inputText}>Пароль</Text>
              <Shadow style={s.inputFieldShadow} startColor={"#00000010"}>
                <TextInput
                  style={s.input}
                  placeholder="Пароль не менее 6 символов"
                  secureTextEntry
                />
              </Shadow>
            </Animated.View>
            <Animated.View
              style={[s.inputField, AnimatedS.inputFieldConfirmPassword]}
            >
              <Text style={s.inputText}>Подтвердите пароль</Text>
              <Shadow style={s.inputFieldShadow} startColor={"#00000010"}>
                <TextInput
                  style={s.input}
                  placeholder="Повторите пароль"
                  secureTextEntry
                />
              </Shadow>
            </Animated.View>
          </Animated.View>

          <Animated.View style={AnimatedS.btnSignUp}>
            <SimpleButton
              bgColor={"#000"}
              centered
              bRad={12}
              style={[s.btn, s.shadow]}
            >
              <Text style={s.btnText}>Зарегистрироваться</Text>
            </SimpleButton>
            <Text style={s.loginText}>
              Уже есть аккаунт? <Text style={s.loginLink}>Войти!</Text>
            </Text>
          </Animated.View>
        </Animated.View>
      </Animated.View>

      <Animated.View style={s.footer}>
        <Animated.Text style={[s.anotherLoginText, AnimatedS.anotherLoginText]}>
          Или зарегистрироваться с
        </Animated.Text>

        <Animated.View style={s.socialsContainer}>
          <Animated.View style={[s.social, AnimatedS.googleIcon]}>
            <Image style={s.socialIcon} source={GoogleIcon} />
          </Animated.View>
          <Animated.View style={[s.social, AnimatedS.maxIcon]}>
            <Image style={s.socialIcon} source={MaxIcon} />
          </Animated.View>
          <Animated.View style={[s.social, AnimatedS.appleIcon]}>
            <Image style={s.socialIcon} source={AppleIcon} />
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};
