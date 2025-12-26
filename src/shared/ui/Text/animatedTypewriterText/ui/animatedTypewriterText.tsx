// components/AnimatedTypewriterText.tsx
import React from "react";
import { TextStyle, View } from "react-native";
import Animated, {
  Easing,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type AnimatedTypewriterTextProps = {
  text: string;
  progress?: SharedValue<number>;
  delayPerLetter?: number;
  letterDuration?: number;
  style?: TextStyle;
  once?: boolean;
  startDelay?: number;
};

const AnimatedLetter = React.memo(
  ({
    char,
    index,
    progress,
    totalDuration,
    letterDuration,
    delayPerLetter,
    textStyle,
  }: {
    char: string;
    index: number;
    progress: SharedValue<number>;
    totalDuration: number;
    letterDuration: number;
    delayPerLetter: number;
    textStyle?: TextStyle;
  }) => {
    const animatedStyle = useAnimatedStyle(() => {
      const start = (index * delayPerLetter) / totalDuration;
      const end = start + letterDuration / totalDuration;
      const raw = (progress.value - start) / (end - start || 1);
      const p = raw < 0 ? 0 : raw > 1 ? 1 : raw;

      return {
        opacity: p,
        transform: [{ translateY: interpolate(p, [0, 1], [8, 0]) }],
      };
    });

    return (
      <Animated.Text style={[textStyle, animatedStyle]}>{char}</Animated.Text>
    );
  }
);

export const AnimatedTypewriterText: React.FC<AnimatedTypewriterTextProps> = ({
  text,
  progress: externalProgress,
  delayPerLetter = 45,
  letterDuration = 240,
  style,
  once = false,
  startDelay = 0,
}) => {
  const internalProgress = useSharedValue(0);
  const progress = externalProgress || internalProgress;

  const letters = text.split("");
  const totalDuration = letters.length * delayPerLetter + letterDuration;

  React.useEffect(() => {
    if (!text) {
      progress.value = 0;
      return;
    }

    if (once && progress.value > 0.9) return;

    progress.value = 0;
    const timer = setTimeout(() => {
      progress.value = withTiming(1, {
        duration: totalDuration,
        easing: Easing.out(Easing.exp),
      });
    }, startDelay);

    return () => clearTimeout(timer);
  }, [text, progress, totalDuration, startDelay, once]);

  if (!text) return null;

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {letters.map((char, i) => (
        <AnimatedLetter
          key={`${char}-${i}`}
          char={char}
          index={i}
          progress={progress}
          totalDuration={totalDuration}
          delayPerLetter={delayPerLetter}
          letterDuration={letterDuration}
          textStyle={style}
        />
      ))}
    </View>
  );
};
