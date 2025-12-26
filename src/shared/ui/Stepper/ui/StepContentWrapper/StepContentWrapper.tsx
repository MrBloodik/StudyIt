// StepContentWrapper.js
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import SlideTransition from "../SlideTransition/SlideTransition";

const StepContentWrapper = ({
  isCompleted,
  currentStep,
  direction = 1,
  children,
  style,
}) => {
  const height = useSharedValue(0);
  const [measuredHeight, setMeasuredHeight] = useState(0);

  const onLayout = (e) => {
    const h = e.nativeEvent.layout.height;
    // только сохраняем, анимация по эффекту
    setMeasuredHeight(h);
  };

  useEffect(() => {
    if (measuredHeight > 0) {
      height.value = withTiming(isCompleted ? 0 : measuredHeight, {
        duration: 400,
      });
    }
  }, [isCompleted, measuredHeight, height]);

  const wrapperStyle = useAnimatedStyle(() => ({
    height: height.value,
    overflow: "hidden",
  }));

  return (
    <Animated.View style={[wrapperStyle, style]}>
      {!isCompleted && (
        <SlideTransition key={currentStep} direction={direction}>
          <View onLayout={onLayout}>{children}</View>
        </SlideTransition>
      )}
    </Animated.View>
  );
};

export default StepContentWrapper;
