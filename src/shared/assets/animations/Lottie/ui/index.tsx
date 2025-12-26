import { FC } from "react";

import AnalyticsCharacter from "../../json/AnalyticsCharacter.json";
import Error404 from "../../json/Error404.json";
import Failed from "../../json/Failed.json";
import ForgotPassword from "../../json/ForgotPassword.json";
import SaladCat from "../../json/SaladCat.json";
import SplashCat from "../../json/SplashCat.json";
import Success from "../../json/Success.json";

import LottieAnimation from "../lib/LottieAnimation";
import { RenderLottieAnimationProps } from "../model/types";

export const AnalyticsCharacterAnimation: FC<RenderLottieAnimationProps> = (
  props
) => {
  return <LottieAnimation source={AnalyticsCharacter} {...props} />;
};

export const SplashCatAnimation: FC<RenderLottieAnimationProps> = (props) => {
  return <LottieAnimation source={SplashCat} {...props} />;
};

export const ForgotPasswordAnimation: FC<RenderLottieAnimationProps> = (
  props
) => {
  return <LottieAnimation source={ForgotPassword} {...props} />;
};

export const SuccessAnimation: FC<RenderLottieAnimationProps> = (props) => {
  return <LottieAnimation source={Success} {...props} />;
};

export const FailedAnimation: FC<RenderLottieAnimationProps> = (props) => {
  return <LottieAnimation source={Failed} {...props} />;
};

export const SaladCatAnimation: FC<RenderLottieAnimationProps> = (props) => {
  return <LottieAnimation source={SaladCat} {...props} />;
};

export const Error404Animation: FC<RenderLottieAnimationProps> = (props) => {
  return <LottieAnimation source={Error404} {...props} />;
};
