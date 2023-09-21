import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ButtonProps as RNButtonProps } from "react-native";
import Text from "./Text";
import { twJoin } from "@/utils/utils";
import { FontWeight } from "./Text";

export interface ButtonProps extends Omit<RNButtonProps, "title"> {
  className?: string;
  children: React.ReactNode;
  scheme?: "primary" | "secondary";
  variant?: "filled" | "outline" | "transparent";
  fontWeight?: FontWeight;
  noText?: boolean;
}

const Button = (props: ButtonProps) => {
  const { className, children, onPress, ...rest } = props;
  const { variant = "filled", scheme = "primary" } = props;
  const { fontWeight = "medium" } = props;
  const { noText = false } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      className="rounded-xl p-[10] bg-primary"
      {...rest}
    >
      {!noText ? (
        <Text
          className={twJoin("text-center text-onPrimary text-lg", className)}
          fontWeight={fontWeight}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default Button;
