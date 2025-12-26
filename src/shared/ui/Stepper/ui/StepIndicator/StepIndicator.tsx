// StepIndicator.js
import React, { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import CheckIcon from "../CheckIcon/CheckIcon";
import s from "./StepIndicatorStyle";

export default function StepIndicator({
  step,
  currentStep,
  onClickStep,
  disableStepIndicators,
}) {
  const status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";

  // 0 = inactive, 1 = active, 2 = complete
  const state = useSharedValue(
    status === "inactive" ? 0 : status === "active" ? 1 : 2
  );

  useEffect(() => {
    const to = status === "inactive" ? 0 : status === "active" ? 1 : 2;
    state.value = withTiming(to, { duration: 300 });
  }, [status, state]);

  const animatedStyle = useAnimatedStyle(() => {
    // backgroundColor as interpolation
    const bg = state.value === 0 ? "#222" : "#5227FF";
    return {
      transform: [{ scale: withTiming(1, { duration: 300 }) }],
      backgroundColor: withTiming(bg, { duration: 300 }),
    };
  });

  const handleClick = () => {
    if (step !== currentStep && !disableStepIndicators) {
      onClickStep(step);
    }
  };

  return (
    <Pressable onPress={handleClick} style={s.stepIndicator}>
      <Animated.View style={[animatedStyle, s.stepIndicatorInner]}>
        {status === "complete" ? (
          <CheckIcon style={s.checkIcon} />
        ) : status === "active" ? (
          <View style={s.activeDot} />
        ) : (
          <Text style={s.stepNumber}>{step}</Text>
        )}
      </Animated.View>
    </Pressable>
  );
}
