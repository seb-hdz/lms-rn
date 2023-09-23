import React from "react";
import { View, TextInput as RNTextInput } from "react-native";
import Text from "./Text";
import { twJoin } from "@/utils/utils";

type RNTextInputProps = RNTextInput["props"];

export interface TextInputProps extends RNTextInputProps {
  label?: string;
}

const TextInput = (props: TextInputProps) => {
  const { className, label, ...rest } = props;

  return (
    <View className={className}>
      {label ? <Text className="mb-2">{label}</Text> : null}
      <View className="p-3 border border-border rounded-lg">
        <RNTextInput cursorColor="#FB4478" {...rest} />
      </View>
    </View>
  );
};

export default TextInput;
