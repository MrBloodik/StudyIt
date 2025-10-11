import React from "react";
import { Text, View } from "react-native";

import { SplashCatAnimation } from "@shared/assets/animations/Lottie/ui";
import s from "./SplashPageStyle";

export const Splash = () => {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <SplashCatAnimation autoPlay loop size={500} />
      </View>

      <View style={s.body}>
        <Text style={s.title}>StudyIt</Text>
      </View>
    </View>
  );
};
