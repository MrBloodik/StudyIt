import { BlurView } from "@react-native-community/blur";
import React, { useEffect } from "react";
import { Dimensions, Text, View } from "react-native";
import Animated from "react-native-reanimated";

import useUiAuthStore from "@features/auth/store/uiStore";
import { CodeInput } from "@shared/ui/Input";

import useUserStore from "@features/auth/store/authStore";
import { SuccessAnimation } from "@shared/assets/animations/Lottie/ui";
import { navigate } from "@shared/lib/navigate";
import { SimpleTimer } from "@shared/ui/Timer";
import s from "./CodePageStyle";
import useCodeAnimations from "./useCodeAnimations";

const { width, height } = Dimensions.get("window");

export const Code = () => {
  const AnimatedS = useCodeAnimations();
  const { showSuccessAnimation, setShowSuccessAnimation } = useUiAuthStore();
  const {
    resetCode,
    email,
    resetCodeCorrected,
    setResetCodeCorrected,
    setResetCode,
  } = useUserStore();

  useEffect(() => {
    if (resetCode.length === 4) {
      if (resetCode === "1234") {
        setResetCodeCorrected(true);
      } else {
        setResetCodeCorrected(false);
      }

      const timer = setTimeout(() => {
        setResetCodeCorrected(null);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [resetCode]);

  useEffect(() => {
    if (resetCodeCorrected) {
      setShowSuccessAnimation(true);
    }
  }, [resetCodeCorrected]);

  const handleFinish = () => {
    setShowSuccessAnimation(false);
    navigate("RecoverPassword");
  };

  const endDate = new Date();
  endDate.setMinutes(endDate.getMinutes() + 20);

  return (
    <View style={s.container}>
      <View style={s.content}>
        <View style={s.body}>
          <View style={s.textContainer}>
            <Animated.Text style={[s.title, AnimatedS.title]}>
              Введите код
            </Animated.Text>
            <Animated.Text style={[s.subTitle, AnimatedS.subtitle]}>
              Мы отправили его на вашу почту:{" "}
              <Text style={s.email}>{email}</Text>
            </Animated.Text>
          </View>
          <View>
            <CodeInput
              code={resetCode}
              codeCorrected={resetCodeCorrected}
              setCode={setResetCode}
            />
          </View>
        </View>

        <Animated.View style={AnimatedS.footer}>
          <Text style={s.sendCodeAgainText}>Получить код повторно</Text>
          <SimpleTimer endDate={endDate.toISOString()} styles={s.timerText} />
        </Animated.View>
      </View>

      {showSuccessAnimation && (
        <View style={s.overlay}>
          <BlurView style={s.blurBackground} blurType="light" blurAmount={5} />
          <SuccessAnimation size={250} autoPlay onFinish={handleFinish} />
        </View>
      )}
    </View>
  );
};
