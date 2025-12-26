import React from "react";
import { Platform, Text, TextInputProps, View } from "react-native";
import { CodeField, Cursor } from "react-native-confirmation-code-field";
import Animated from "react-native-reanimated";

import s, { CELL_COUNT } from "./CodeInputStyles";
import { useCodeInputAnimations } from "./useCodeInputAnimations";

interface CodeInputProps {
  code: string;
  codeCorrected: boolean | null;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}

export const CodeInput: React.FC<CodeInputProps> = ({
  code,
  codeCorrected,
  setCode,
}) => {
  const {
    ref,
    clearProps,
    getCellOnLayoutHandler,
    animatedStylesForPrint,
    animatedStylesForAppear,
  } = useCodeInputAnimations(code, codeCorrected, setCode);

  const autoComplete = Platform.select<TextInputProps["autoComplete"]>({
    android: "sms-otp",
    default: "one-time-code",
  });

  const renderCell = ({
    index,
    symbol,
    isFocused,
  }: {
    index: number;
    symbol: string;
    isFocused: boolean;
  }) => {
    return (
      <Animated.View
        key={index}
        style={[
          s.cell,
          animatedStylesForPrint[index],
          animatedStylesForAppear[index],
        ]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        <Text style={s.cellText}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      </Animated.View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <CodeField
        ref={ref}
        {...clearProps}
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        rootStyle={s.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
        autoComplete={autoComplete}
      />
    </View>
  );
};
