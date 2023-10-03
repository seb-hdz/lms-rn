import React from "react";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

import Text from "../ui/Text";

import BackArrowSVG from "assets/icons/back-arrow.svg";

const GoBack = () => {
  const { back } = router;

  return (
    <TouchableOpacity
      className="flex-row items-center gap-x-2"
      onPress={() => back()}
    >
      <BackArrowSVG />
      <Text fontWeight="medium">Atrás</Text>
    </TouchableOpacity>
  );
};

export default GoBack;
