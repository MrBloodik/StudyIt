import React, { useEffect } from "react";
import { Text, TextInput } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import s from "./AnimatedInputStyle";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
const AnimatedView = Animated.View;

type AnimatedInputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  errorMessage?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  style?: object;
  delay?: number;
};

export const AnimatedInput: React.FC<AnimatedInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  errorMessage,
  onFocus,
  onBlur,
  style,
  delay = 0,
}) => {
  const translateY = useSharedValue(100);
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);
  const borderColor = useSharedValue("#ccc");
  const isFocused = useSharedValue(false);

  const containerStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      { translateY: translateY.value },
      { scale: scale.value },
    ] as const,
  }));

  const inputStyle = useAnimatedStyle(() => ({
    borderWidth: 2,
    borderColor: errorMessage
      ? "red"
      : isFocused.value
      ? "blue"
      : borderColor.value,
  }));

  useEffect(() => {
    translateY.value = withDelay(
      delay,
      withSpring(0, { stiffness: 1000, damping: 170, mass: 30 })
    );
    scale.value = withDelay(delay, withSpring(1));
    opacity.value = withDelay(
      delay,
      withTiming(1, { duration: 600, easing: Easing.ease })
    );
  }, [delay]);

  useEffect(() => {
    borderColor.value = errorMessage ? "red" : "#ccc";
  }, [errorMessage]);

  const handleFocus = () => {
    isFocused.value = true;
    onFocus?.();
  };

  const handleBlur = () => {
    isFocused.value = false;
    onBlur?.();
  };

  return (
    <AnimatedView style={[s.inputField, containerStyle]}>
      <Text style={s.inputText}>{label}</Text>
      {errorMessage && <Text style={s.errorText}>{errorMessage}</Text>}
      <AnimatedTextInput
        style={[s.input, inputStyle, style]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </AnimatedView>
  );
};
