import React, { forwardRef } from "react";
import {
  DimensionValue,
  FlexAlignType,
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";

interface SimpleButtonProps {
  bgColor?: string | number;
  centered?: boolean;
  debug?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  align?: FlexAlignType;
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  height?: DimensionValue;
  width?: DimensionValue;
  disabled?: boolean;
  bRad?: number;
}

export const SimpleButton = forwardRef<
  View,
  SimpleButtonProps & TouchableOpacityProps
>(
  (
    {
      onPress,
      children,
      centered,
      align = "flex-start",
      justify = "flex-start",
      bgColor,
      height = "auto",
      width = "auto",
      bRad = 0,
      disabled = false,
      debug = false,
      style = {},
      ...props
    },
    ref
  ) => {
    return (
      <TouchableOpacity
        ref={ref}
        onPress={(event: GestureResponderEvent) => onPress && onPress(event)}
        style={[
          {
            alignItems: centered ? "center" : align,
            justifyContent: centered ? "center" : justify,
            height: height,
            opacity: disabled ? 0.5 : 1,
            backgroundColor: bgColor ? bgColor + "" : undefined,
            borderRadius: bRad,
          },
          style,
          debug && { borderWidth: 0.3, borderColor: "red" },
        ]}
        disabled={disabled}
        {...props}
      >
        {children || <></>}
      </TouchableOpacity>
    );
  }
);

SimpleButton.displayName = "SimpleButton";
