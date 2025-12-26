import { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import s from "./StepConnectorStyle";

const StepConnector = ({ isComplete }) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(isComplete ? 1 : 0, { duration: 400 });
  }, [isComplete]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
    backgroundColor: progress.value > 0.99 ? "#5227FF" : "transparent",
  }));

  return (
    <View style={s.StepConnector}>
      <Animated.View style={[s.StepConnectorInner, animatedStyle]} />
    </View>
  );
};

export default StepConnector;
