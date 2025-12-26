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
  translateX?: { from: number; to: number; springConfig?: object };
  translateY?: { from: number; to: number; springConfig?: object };
  scale?: { from: number; to: number; springConfig?: object };
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
}: AnimateProps = {}) {
  const translateXVal = translateX ? useSharedValue(translateX.from) : null;
  const translateYVal = translateY ? useSharedValue(translateY.from) : null;
  const scaleVal = scale ? useSharedValue(scale.from) : null;
  const opacityVal = opacity ? useSharedValue(opacity.from) : null;

  const hasAnimated = useRef(false);
  const isFocused = useIsFocused();

  const run = useCallback(() => {
    "worklet";

    if (triggerOnFocus) {
      if (translateXVal) translateXVal.value = translateX!.from;
      if (translateYVal) translateYVal.value = translateY!.from;
      if (scaleVal) scaleVal.value = scale!.from;
      if (opacityVal) opacityVal.value = opacity!.from;
    }

    if (translateXVal) {
      translateXVal.value = withDelay(
        delay,
        withSpring(translateX!.to, translateX.springConfig)
      );
    }
    if (translateYVal) {
      translateYVal.value = withDelay(
        delay,
        withSpring(translateY!.to, translateY.springConfig)
      );
    }
    if (scaleVal) {
      scaleVal.value = withDelay(
        delay,
        withSpring(scale!.to, scale.springConfig)
      );
    }
    if (opacityVal) {
      opacityVal.value = withDelay(
        delay,
        withTiming(opacity!.to, {
          duration: opacity.duration ?? 300,
          easing: opacity.easing,
        })
      );
    }

    hasAnimated.current = true;
  }, [translateX, translateY, scale, opacity, delay, triggerOnFocus]);

  useEffect(() => {
    if (triggerOnFocus) {
      if (isFocused) run();
    } else if (!hasAnimated.current) {
      run();
    }
  }, [isFocused, run, triggerOnFocus]);

  const animatedStyle = useAnimatedStyle((): ViewStyle => {
    const transforms: any[] = [];

    if (translateXVal) transforms.push({ translateX: translateXVal.value });
    if (translateYVal) transforms.push({ translateY: translateYVal.value });
    if (scaleVal) transforms.push({ scale: scaleVal.value });

    return {
      transform: transforms,
      opacity: opacityVal ? opacityVal.value : 1,
    };
  }, []);

  return animatedStyle;
}
