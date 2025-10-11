import LottieView, { AnimationObject } from "lottie-react-native";
import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import type { RenderLottieAnimationProps } from "../model/types";

interface WithSource extends RenderLottieAnimationProps {
  source: string | AnimationObject;
}

const RenderLottieAnimation: React.FC<WithSource> = ({
  source,
  size = 100,
  autoPlay = false,
  loop = false,
  speed = 1,
  play,
  onFinish,
}) => {
  const animation = useRef<LottieView>(null);

  useEffect(() => {
    if (play === true) {
      animation.current?.reset();
      animation.current?.play();
    } else if (play === false) {
      animation.current?.reset();
    }
  }, [play]);

  return (
    <View style={{ width: size, height: size }}>
      <LottieView
        ref={animation}
        source={source}
        autoPlay={autoPlay}
        loop={loop}
        speed={speed}
        style={{ width: size, height: size }}
        onAnimationFinish={onFinish}
      />
    </View>
  );
};

export default RenderLottieAnimation;
