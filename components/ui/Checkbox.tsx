import CheckSVG from "assets/icons/check.svg";
import React, { forwardRef } from "react";
import { View, TouchableOpacity } from "react-native";

import Text from "./Text";

import { jn } from "@/utils/utils";

export interface CheckboxProps {
  className?: string;
  textClassName?: string;
  label: string;
  onToggle?: (active: boolean) => void;
  active?: boolean;
  disabled?: boolean;
  errorMessage?: string;
}

const Checkbox = forwardRef((props: CheckboxProps, ref) => {
  const { className, textClassName, label } = props;
  const { onToggle, active = false, disabled, errorMessage } = props;

  return (
    <>
      <TouchableOpacity
        onPress={() => onToggle?.(!active)}
        disabled={disabled}
        className="flex flex-row items-center gap-x-4"
      >
        <View
          className={jn(
            "h-4 w-4 items-center justify-center rounded",
            active ? "bg-primary" : "border-2 border-primary"
          )}
        >
          {active ? <CheckSVG /> : null}
        </View>
        <Text className={textClassName}>{label}</Text>
      </TouchableOpacity>
      {errorMessage?.length ? (
        <Text className="text-danger" fontWeight="light">
          {errorMessage}
        </Text>
      ) : null}
    </>
  );
});

export default Checkbox;
