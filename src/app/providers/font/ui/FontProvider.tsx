import React from "react";

import { useAppFonts } from "@shared/lib/fonts";

const fonts = {
  PlayfairDisplayBlack: require("assets/fonts/PlayfairDisplay-Black.ttf"),
  KingsmanHandRegular: require("assets/fonts/KingsmanHand-regular.ttf"),
};

export const FontProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const loaded = useAppFonts(fonts);

  if (!loaded) return null;

  return <>{children}</>;
};
