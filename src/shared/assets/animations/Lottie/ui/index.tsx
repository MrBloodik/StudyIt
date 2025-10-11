import React from "react";
import LottieAnimation from "../lib/LottieAnimation";

import AnalyticsCharacter from "../../json/AnalyticsCharacter.json";
import SplashCat from "../../json/SplashCat.json";
import { RenderLottieAnimationProps } from "../model/types";

export const AnalyticsCharacterAnimation: React.FC<
  RenderLottieAnimationProps
> = (props) => {
  return <LottieAnimation source={AnalyticsCharacter} {...props} />;
};

export const SplashCatAnimation: React.FC<RenderLottieAnimationProps> = (
  props
) => {
  return <LottieAnimation source={SplashCat} {...props} />;
};
