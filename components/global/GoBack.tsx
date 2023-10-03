import React from "react";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

import Text from "../ui/Text";

import ChevronSVG from "assets/icons/chevron.svg";
import { jn } from "@/utils/utils";

interface GoBackProps {
  className?: string;
  iconClassName?: string;
  showText?: boolean;
}

const GoBack = (props: GoBackProps) => {
  const { className, iconClassName, showText = true } = props;
  const { back } = router;

  return (
    <TouchableOpacity
      className={jn("GoBack", "flex-row items-center gap-x-2", className)}
      onPress={() => back()}
    >
      <ChevronSVG className={iconClassName} />
      {showText ? <Text fontWeight="medium">Atrás</Text> : null}
    </TouchableOpacity>
  );
};

export default GoBack;
