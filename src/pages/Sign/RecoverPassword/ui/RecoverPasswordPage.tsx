import React, { useState } from "react";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";

import { SimpleButton } from "@shared/ui/Button";
import { AnimatedInput } from "@shared/ui/Input";

import s from "./RecoverPasswordPageStyle";

export const RecoverPassword = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={s.container}>
      <View style={s.content}>
        <Animated.View style={[s.header]}>
          <Text style={s.title}>Новый пароль</Text>
          <Text style={s.subTitle}>
            Пожайлуста придумайте новый пароль который вы сможете запомнить!
          </Text>
        </Animated.View>

        <View style={s.body}>
          <AnimatedInput
            label="Новый пароль"
            placeholder="Пароль не менее 6 символов"
            value={password}
            onChangeText={(v) => setPassword(v)}
            delay={400}
          />
          <AnimatedInput
            label="Пароль"
            placeholder="Введите ваш пароль"
            secureTextEntry
            value={confirmPassword}
            onChangeText={(v) => setConfirmPassword(v)}
            delay={500}
          />

          <Animated.View>
            <SimpleButton
              bgColor="#000"
              centered
              bRad={12}
              style={[s.btn, s.shadow]}
              disabled={loading}
            >
              <Text style={s.btnText}>Сбросить пароль</Text>
            </SimpleButton>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};
