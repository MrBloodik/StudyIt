// TODO: ПЕРЕПИСАТЬ ЛОГИКУ ОНА ОЧ СТРАННАЯ ВЫШЛА

import { useEffect } from "react";
import { Alert } from "react-native";
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { useSpringStyle } from "@shared/lib/animate";
import {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_COUNT,
  CELL_SIZE,
  CORRECT_CELL_BG_COLOR,
  ERROR_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR,
} from "./CodeInputStyles";

export const useCodeInputAnimations = (
  value: string,
  correct: boolean | null,
  setValue: React.Dispatch<React.SetStateAction<string>>
) => {
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [clearProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const progress0 = useSharedValue(0);
  const progress1 = useSharedValue(0);
  const progress2 = useSharedValue(0);
  const progress3 = useSharedValue(0);
  const progressArray = [progress0, progress1, progress2, progress3];

  const isError = useSharedValue(0);
  const isCorrect = useSharedValue(0);
  const shake = useSharedValue(0);

  const bgColor = () => {
    "worklet";
    if (isError.value) {
      return ERROR_CELL_BG_COLOR;
    }
    if (isCorrect.value) {
      return CORRECT_CELL_BG_COLOR;
    }
    return [ACTIVE_CELL_BG_COLOR, NOT_EMPTY_CELL_BG_COLOR];
  };

  const showAlert = () => {
    return new Promise((resolve) => {
      Alert.alert("Ошибка", "Неверный код", [
        {
          text: "OK",
          onPress: () => {
            shake.value = withSequence(
              withTiming(-10, { duration: 80 }),
              withTiming(10, { duration: 80 }),
              withTiming(-10, { duration: 80 }),
              withTiming(10, { duration: 80 }),
              withTiming(0, { duration: 80 })
            );
          },
        },
      ]);
    });
  };

  const createAnimatedStyleForPrint = (progress: typeof progress0) =>
    useAnimatedStyle(() => ({
      backgroundColor: interpolateColor(
        isError.value ? 1 : progress.value,
        [0, 1],
        bgColor()
      ),
      borderRadius: interpolate(
        progress.value,
        [0, 1],
        [CELL_BORDER_RADIUS, CELL_SIZE / 2],
        Extrapolation.CLAMP
      ),

      //@ts-ignore
      transform: [
        {
          scale: interpolate(
            progress.value,
            [0, 1],
            [1, 0.2],
            Extrapolation.CLAMP
          ),
        },
        { translateX: shake.value },
      ],
    }));

  const animatedStylesForPrint = [
    createAnimatedStyleForPrint(progress0),
    createAnimatedStyleForPrint(progress1),
    createAnimatedStyleForPrint(progress2),
    createAnimatedStyleForPrint(progress3),
  ];

  const animatedStylesForAppear = [
    useSpringStyle({
      translateY: {
        from: 100,
        to: 0,
        springConfig: { stiffness: 1380, damping: 270, mass: 20 },
      },
      scale: { from: 0, to: 1 },
      delay: 300,
    }),
    useSpringStyle({
      translateY: {
        from: 100,
        to: 0,
        springConfig: { stiffness: 1380, damping: 270, mass: 20 },
      },
      scale: { from: 0, to: 1 },
      delay: 400,
    }),
    useSpringStyle({
      translateY: {
        from: 100,
        to: 0,
        springConfig: { stiffness: 1380, damping: 270, mass: 20 },
      },
      scale: { from: 0, to: 1 },
      delay: 500,
    }),
    useSpringStyle({
      translateY: {
        from: 100,
        to: 0,
        springConfig: { stiffness: 1380, damping: 270, mass: 20 },
      },
      scale: { from: 0, to: 1 },
      delay: 600,
    }),
  ];

  useEffect(() => {
    progressArray.forEach((progress, index) => {
      const hasValue = !!value[index];
      progress.value = withSpring(hasValue ? 1 : 0);
    });
  }, [value]);

  useEffect(() => {
    if (correct === false) {
      isError.value = 1;

      showAlert();
      setTimeout(() => {
        setValue("");
        isError.value = 0;
        shake.value = 0;
      }, 2000);
    } else if (correct) {
      isCorrect.value = 1;

      setTimeout(() => {
        setValue("");
        isCorrect.value = 0;
      }, 2000);
    }
  }, [value, correct]);

  return {
    ref,
    clearProps,
    getCellOnLayoutHandler,
    animatedStylesForPrint,
    animatedStylesForAppear,
  };
};
