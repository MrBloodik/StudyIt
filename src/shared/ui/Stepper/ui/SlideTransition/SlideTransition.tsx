import { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const SlideTransition = ({ direction, children }) => {
  const translateX = useSharedValue(direction === "forward" ? 300 : -300);
  const opacity = useSharedValue(0);

  useEffect(() => {
    translateX.value = withTiming(0, { duration: 400 });
    opacity.value = withTiming(1, { duration: 400 });

    return () => {
      translateX.value = withTiming(direction === "forward" ? -300 : 300, {
        duration: 400,
      });
      opacity.value = withTiming(0, { duration: 400 });
    };
  }, [direction]);

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
