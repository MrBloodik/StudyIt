import React from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import CheckIcon from "../CheckIcon/CheckIcon";

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

  const handleClick = () => {
    if (step !== currentStep && !disableStepIndicators) onClickStep(step);
  };

  const animatedStyle = useAnimatedStyle(() => {
    let backgroundColor = "#222";
    let color = "#a3a3a3";

    if (status === "active") {
      backgroundColor = "#5227FF";
      color = "#5227FF";
    } else if (status === "complete") {
      backgroundColor = "#5227FF";
      color = "#3b82f6";
    }

    return {
      backgroundColor: withTiming(backgroundColor, { duration: 300 }),
      transform: [{ scale: withTiming(1, { duration: 300 }) }],
    };
  }, [status]);

  return (
    <Pressable
      onPress={handleClick}
      style={
        {
          /* stepIndicatorStyle */
        }
      }
    >
      <Animated.View
        style={[
          animatedStyle,
          {
            /* stepIndicatorInnerStyle */
          },
        ]}
      >
        {status === "complete" ? (
          <CheckIcon
            style={
              {
                /* checkIconStyle */
              }
            }
          />
        ) : status === "active" ? (
          <View
            style={
              {
                /* activeDotStyle */
              }
            }
          />
        ) : (
          <Text
            style={
              {
                /* stepNumberStyle */
              }
            }
          >
            {step}
          </Text>
        )}
      </Animated.View>
    </Pressable>
  );
}
