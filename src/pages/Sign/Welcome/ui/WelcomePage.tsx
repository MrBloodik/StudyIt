import React from "react";
import { Dimensions, Text, View } from "react-native";

import { AnalyticsCharacterAnimation } from "@shared/assets/animations/Lottie/ui";
import { SimpleButton } from "@shared/ui";

import { navigate } from "@shared/lib/navigate";
import s from "./WelcomePageStyle";

export const Welcome = () => {
  const { width } = Dimensions.get("window");

  return (
    <View style={s.container}>
      <View style={s.header}>
        <AnalyticsCharacterAnimation size={width} loop autoPlay />
      </View>

      <View style={s.body}>
        <Text style={[s.title, s.shadow]}>
          Единственное приложение для учебы которое тебе нужно!
        </Text>
        <Text style={[s.subtitle, s.shadow]}>
          Следи за оценками! Узнавай домашнее задание! Борись в таблице лидеров!
        </Text>
      </View>

      <View style={s.footer}>
        <SimpleButton
          bgColor={"#000"}
          centered
          bRad={20}
          onPress={() => navigate("Splash")}
          style={[s.btn, s.shadow]}
        >
          <Text style={s.btnText}>Начнем!</Text>
        </SimpleButton>
      </View>
    </View>
  );
};
