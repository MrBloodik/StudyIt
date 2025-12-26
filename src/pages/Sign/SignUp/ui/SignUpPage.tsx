import React, { useState } from "react";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";

import { SimpleButton } from "@shared/ui/Button";
import { AnimatedInput } from "@shared/ui/Input";

import useAuthForm from "@features/auth/hooks/useAuthForm";
import SocialAuthFooter from "@features/auth/ui";

import s from "./SignUpPageStyle";
import useSignUpAnimations from "./useSignUpAnimations";

export const SignUp = () => {
  const AnimatedS = useSignUpAnimations();
  const [loading, setLoading] = useState(false);

  const { email, password, confirm, errors, handleChange, handleSubmit } =
    useAuthForm("SignUp", {
      onSubmit: async (f) => {
        // TODO: Реализовать SignUp API
      },
    });

  return (
    <View style={s.container}>
      <View style={s.content}>
        <Animated.View style={[s.header, AnimatedS.header]}>
          <Text style={s.title}>Регистрация</Text>
        </Animated.View>
        <View style={s.body}>
          <AnimatedInput
            placeholder="example@gmail.com"
            label="Почта"
            errorMessage={errors.email}
            onChangeText={(v) => handleChange("email", v)}
            value={email}
            delay={400}
          />
          <AnimatedInput
            label="Пароль"
            errorMessage={errors.password}
            placeholder="Пароль не менее 6 символов"
            secureTextEntry
            onChangeText={(v) => handleChange("password", v)}
            value={password}
            delay={500}
          />
          <AnimatedInput
            label="Повторите пароль"
            placeholder="Повторите пароль"
            secureTextEntry
            errorMessage={errors.confirm}
            onChangeText={(v) => handleChange("confirm", v)}
            value={confirm}
            delay={600}
          />

          <Animated.View style={AnimatedS.btnSignUp}>
            <SimpleButton
              bgColor="#000"
              centered
              bRad={12}
              style={[s.btn, s.shadow]}
              onPress={async () => {
                const ok = await handleSubmit();
                if (!ok) return;
              }}
              disabled={loading}
            >
              <Text style={s.btnText}>Зарегистрироваться</Text>
            </SimpleButton>
          </Animated.View>
        </View>
      </View>

      <SocialAuthFooter mode="register" />
    </View>
  );
};
