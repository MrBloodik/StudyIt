import React from "react";
import LottieAnimation from "../lib/LottieAnimation";

import AnalyticsCharacter from "../../json/AnalyticsCharacter.json";
import Failed from "../../json/Failed.json";
import ForgotPassword from "../../json/ForgotPassword.json";
import SplashCat from "../../json/SplashCat.json";
import Success from "../../json/Success.json";

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

export const ForgotPasswordAnimation: React.FC<RenderLottieAnimationProps> = (
  props
) => {
  return <LottieAnimation source={ForgotPassword} {...props} />;
};

export const SuccessAnimation: React.FC<RenderLottieAnimationProps> = (
  props
) => {
  return <LottieAnimation source={Success} {...props} />;
};

export const FailedAnimationt: React.FC<RenderLottieAnimationProps> = (
  props
) => {
  return <LottieAnimation source={Failed} {...props} />;
};
