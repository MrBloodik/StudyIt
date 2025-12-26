import React, { useState } from "react";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";

import { SimpleButton } from "@shared/ui/Button";
import { AnimatedInput } from "@shared/ui/Input";

import useAuthForm from "@features/auth/hooks/useAuthForm";
import SocialAuthFooter from "@features/auth/ui";
import { navigate } from "@shared/lib/navigate";

import s from "./SignInPageStyle";
import useSignInAnimations from "./useSignInAnimations";

export const SignIn = () => {
  const AnimatedS = useSignInAnimations();
  const [loading, setLoading] = useState(false);

  const { email, password, errors, handleChange, handleSubmit } = useAuthForm(
    "SignIn",
    {
      onSubmit: async (f) => {
        // TODO: SignIn api
      },
    }
  );

  const handleForgot = () => {
    navigate("Forgot");
  };

  return (
    <View style={s.container}>
      <View style={s.content}>
        <Animated.View style={[s.header, AnimatedS.header]}>
          <Text style={s.title}>Добро пожаловать!👋</Text>
        </Animated.View>

        <View style={s.body}>
          <AnimatedInput
            label="Почта"
            placeholder="example@gmail.com"
            value={email}
            onChangeText={(v) => handleChange("email", v)}
            errorMessage={errors.email}
            delay={400}
          />
          <AnimatedInput
            label="Пароль"
            placeholder="Введите ваш пароль"
            secureTextEntry
            value={password}
            onChangeText={(v) => handleChange("password", v)}
            errorMessage={errors.password}
            delay={500}
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
              <Text style={s.btnText}>Войти</Text>
            </SimpleButton>
            <Text style={s.forgotPassword} onPress={handleForgot}>
              Забыли пароль?
            </Text>
          </Animated.View>
        </View>
      </View>

      <SocialAuthFooter mode="login" />
    </View>
  );
};
