import React from "react";
import Button from "../ui/Button";

import ChatSVG from "assets/icons/chat.svg";
import { jn } from "@/utils/utils";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

interface AIButtonProps {
  className?: string;
}

const AIButton = (props: AIButtonProps) => {
  const { className } = props;

  return (
    <TouchableOpacity
      className={jn(
        "AIButton",
        "w-16 h-16 rounded-full items-center justify-center bg-transparent",
        className
      )}
    >
      <LinearGradient
        colors={["#3D87F8", "#FB4478"]}
        className="p-4 rounded-full"
      >
        <ChatSVG />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default AIButton;
