import React from "react";

import { useAppFonts } from "@shared/lib/fonts";

const fonts = {
  PlayfairDisplayBlack: require("assets/fonts/PlayfairDisplay-Black.ttf"),
  KingsmanHandRegular: require("assets/fonts/KingsmanHand-regular.ttf"),
  InterSemiBold: require("assets/fonts/Inter-SemiBold.otf"),
  InterRegular: require("assets/fonts/Inter-regular.otf"),
  PoppinsBold: require("assets/fonts/Poppins-Bold.ttf"),
};

export const FontProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const loaded = useAppFonts(fonts);

  if (!loaded) return null;

  return <>{children}</>;
};
