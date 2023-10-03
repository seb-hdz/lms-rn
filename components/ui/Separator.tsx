import { jn } from "@/utils/utils";
import React from "react";
import { View } from "react-native";

interface SpacerProps {
  classNames?: string;
}

const Spacer = (props: SpacerProps) => {
  const { classNames } = props;

  return <View className={jn("Spacer", classNames)} />;
};

export default Spacer;
