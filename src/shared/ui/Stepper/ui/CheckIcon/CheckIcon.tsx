import { useEffect } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const CheckIcon = ({ size = 24, color = "#fff", ...props }) => {
  const length = 24;
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(1, {
      duration: 300,
    });
  }, []);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: length - length * progress.value,
  }));

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      {...props}
    >
      <AnimatedPath
        d="M5 13l4 4L19 7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={length}
        animatedProps={animatedProps}
      />
    </Svg>
  );
};

export default CheckIcon;
