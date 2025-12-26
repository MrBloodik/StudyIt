import { useRef, useState } from "react";
import { Dimensions, View } from "react-native";
import Animated from "react-native-reanimated";

import { ForgotPasswordAnimation } from "@shared/assets/animations/Lottie/ui";
import { navigate } from "@shared/lib/navigate";
import { validateEmailMsg } from "@shared/lib/validators";
import { SimpleButton } from "@shared/ui/Button";
import { AnimatedInput } from "@shared/ui/Input";

import useUserStore from "@features/auth/store/authStore";
import s from "./ForgotPageStyle";
import useForgotAnimations from "./useForgotAnimations";

export const Forgot = () => {
  const AnimatedS = useForgotAnimations();
  const { email, setEmail } = useUserStore();
  const { width } = Dimensions.get("window");
  const size = width * 0.95;

  const [error, setError] = useState("");
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (value: string) => {
    const normalized = value.replaceAll(" ", "");
    setEmail(normalized);

    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setError(validateEmailMsg(normalized));
    }, 400);
  };

  const onPress = () => {
    navigate("Code");
  };

  return (
    <View style={s.container}>
      <View style={s.content}>
        <View style={s.header}>
          <Animated.View style={AnimatedS.header}>
            <ForgotPasswordAnimation size={size} loop autoPlay />
          </Animated.View>
          <Animated.Text style={[s.title, AnimatedS.title]}>
            Введите почту
          </Animated.Text>
          <Animated.Text style={[s.subTitle, AnimatedS.subtitle]}>
            Введите свою почту для восстановления доступа к аккаунту
          </Animated.Text>
        </View>
        <View style={s.body}>
          <AnimatedInput
            label="Почта"
            placeholder="example@gmail.com"
            value={email}
            onChangeText={handleChange}
            errorMessage={error}
            delay={800}
          />
        </View>
        <Animated.View style={AnimatedS.footer}>
          <SimpleButton
            bgColor="#000"
            centered
            bRad={12}
            style={[s.btn, s.shadow]}
            onPress={onPress}
          >
            <Animated.Text style={s.btnText}>Получить код</Animated.Text>
          </SimpleButton>
        </Animated.View>
      </View>
    </View>
  );
};
