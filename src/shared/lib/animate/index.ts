import { useIsFocused } from "@react-navigation/native";
import { useCallback, useEffect, useRef } from "react";
import { ViewStyle } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export type AnimateProps = {
  translateX?: { from: number; to: number; springConfig?: {} };
  translateY?: { from: number; to: number; springConfig?: {} };
  scale?: { from: number; to: number; springConfig?: {} };
  opacity?: {
    from: number;
    to: number;
    duration?: number;
    easing: (value: number) => number;
  };
  delay?: number;
  triggerOnFocus?: boolean;
};

export function useSpringStyle({
  translateX,
  translateY,
  scale,
  opacity,
  delay = 0,
  triggerOnFocus = false,
}: AnimateProps) {
  const translateXVal = translateX ? useSharedValue(translateX?.from) : null;
  const translateYVal = translateY ? useSharedValue(translateY?.from) : null;
  const scaleVal = scale ? useSharedValue(scale?.from) : null;
  const opacityVal = opacity ? useSharedValue(opacity?.from) : null;

  const hasAnimated = useRef(false);
  const isFocused = useIsFocused();

  const run = useCallback(() => {
    if (triggerOnFocus) {
      if (translateX) translateXVal.value = translateX.from;
      if (translateY) translateYVal.value = translateY.from;
      if (scale) scaleVal.value = scale.from;
      if (opacity) opacityVal.value = opacity.from;
    }

    if (translateX)
      translateXVal.value = withDelay(
        delay,
        withSpring(translateX.to, translateX.springConfig)
      );
    if (translateY)
      translateYVal.value = withDelay(
        delay,
        withSpring(translateY.to, translateY.springConfig)
      );
    if (scale)
      scaleVal.value = withDelay(
        delay,
        withSpring(scale.to, scale.springConfig)
      );
    if (opacity)
      opacityVal.value = withDelay(
        delay,
        withTiming(opacity.to, {
          duration: opacity.duration,
          easing: opacity.easing,
        })
      );

    hasAnimated.current = true;
  }, [translateX, translateY, scale, opacity, delay, triggerOnFocus]);

  useEffect(() => {
    if (triggerOnFocus) {
      if (isFocused) run();
    } else if (!hasAnimated.current) {
      run();
    }
  }, [isFocused, triggerOnFocus, run]);

  const animatedStyle = useAnimatedStyle(
    (): ViewStyle => ({
      transform: [
        ...(translateX ? [{ translateX: translateXVal.value }] : []),
        ...(translateY ? [{ translateY: translateYVal.value }] : []),
        ...(scale ? [{ scale: scaleVal.value }] : []),
      ],
      opacity: opacity ? opacityVal.value : null,
    })
  );

  return animatedStyle;
}
