// SlideTransition.js
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const SlideTransition = ({ direction = 1, children }) => {
  // direction: 1 forward (from right), -1 back (from left)
  const translateX = useSharedValue(direction >= 1 ? 300 : -300);
  const opacity = useSharedValue(0);

  useEffect(() => {
    // вход
    translateX.value = withTiming(0, { duration: 350 });
    opacity.value = withTiming(1, { duration: 300 });

    // не анимируем выход здесь — родитель управляет unmount
  }, [direction, translateX, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    transform: [{ translateX: translateX.value }],
    opacity: opacity.value,
  }));

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};

export default SlideTransition;
