import { useEffect, useState } from "react";
import { LayoutChangeEvent, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import SlideTransition from "../SlideTransition/SlideTransition";

const StepContentWrapper = ({
  isCompleted,
  currentStep,
  direction,
  children,
  style,
}) => {
  const height = useSharedValue(0);
  const [measuredHeight, setMeasuredHeight] = useState(0);

  const onLayout = (e: LayoutChangeEvent) => {
    const h = e.nativeEvent.layout.height;
    setMeasuredHeight(h);
    height.value = withTiming(h, { duration: 400 });
  };

  useEffect(() => {
    if (isCompleted) {
      height.value = withTiming(0, { duration: 400 });
    } else {
      height.value = withTiming(measuredHeight, { duration: 400 });
    }
  }, [isCompleted, measuredHeight]);

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
