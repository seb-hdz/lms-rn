import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "./Text";

import CheckSVG from "assets/icons/check.svg";

export interface CheckboxProps {
  className?: string;
  textClassName?: string;
  label: string;
  onToggle?: (active: boolean) => void;
  active?: boolean;
  disabled?: boolean;
  error?: string;
}

const Checkbox = (props: CheckboxProps) => {
  const { className, textClassName, label } = props;
  const { onToggle, active = false, disabled, error } = props;

  return (
    <>
      <TouchableOpacity
        onPress={() => onToggle?.(!active)}
        disabled={disabled}
        className="flex flex-row items-center gap-x-4"
      >
        <View className="h-4 w-4 items-center justify-center bg-primary rounded">
          {active ? <CheckSVG /> : null}
        </View>
        <Text className={textClassName}>{label}</Text>
      </TouchableOpacity>
      {error ? <Text className="text-danger">{error}</Text> : null}
    </>
  );
};

export default Checkbox;
