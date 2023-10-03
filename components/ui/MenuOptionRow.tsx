import React from "react";
import { TouchableOpacity, View } from "react-native";
import Text from "./Text";

import ChevronSVG from "assets/icons/chevron.svg";
import { jn } from "@/utils/utils";
import Spacer from "./Separator";

interface MenuOptionRowProps {
  className?: string;
  optionName: string;
  optionDescription?: string;
  optionInfo?: string;
  variant?: "header" | "option";
  noSeparator?: boolean;
  onPress?: () => void;
}

const MenuOptionRow = (props: MenuOptionRowProps) => {
  const { className, optionName, optionDescription } = props;
  const { variant = "option", optionInfo, noSeparator = false } = props;
  const { onPress } = props;

  return (
    <>
      <TouchableOpacity
        className="flex-row justify-between items-center px-5 py-3 bg-surface"
        onPress={onPress}
      >
        <View>
          <Text
            className={jn(
              variant === "header"
                ? "text-kBlack50 text-sm"
                : "text-base text-black"
            )}
            fontWeight={variant === "header" ? "medium" : "regular"}
          >
            {optionName}
          </Text>
          {optionDescription ? (
            <Text
              fontWeight="light"
              numberOfLines={1}
              ellipsizeMode="tail"
              className="text-kBlack50 text-xs truncate w-48"
            >
              {optionDescription}
            </Text>
          ) : null}
        </View>
        {optionInfo ? (
          <Text className="text-kBlack50 text-xs text-end">{optionInfo}</Text>
        ) : null}
        {variant === "option" && !optionInfo ? (
          <ChevronSVG className="rotate-180" />
        ) : null}
      </TouchableOpacity>
      {!noSeparator ? <Spacer classNames="h-1 w-full bg-surfaceAlt" /> : null}
    </>
  );
};

export default MenuOptionRow;
