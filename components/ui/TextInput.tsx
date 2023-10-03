import React, { forwardRef } from "react";
import { View, TextInput as RNTextInput } from "react-native";

import Text from "./Text";

type RNTextInputProps = RNTextInput["props"];

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>((props, ref) => {
  const { className, label, errorMessage, ...rest } = props;

  return (
    <View className={className}>
      {label ? <Text className="mb-2">{label}</Text> : null}
      <View className="p-3 border border-border rounded-lg">
        <RNTextInput
          ref={ref}
          // TODO: add colors from palette or tailwind
          selectionColor="#FB4478" // primary
          placeholderTextColor="#BCBCC0" // black35
          {...rest}
        />
      </View>
      {errorMessage ? (
        <Text fontWeight="light" className="text-danger">
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
});

export default TextInput;
