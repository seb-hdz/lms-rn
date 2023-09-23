import React from "react";
import Text from "./ui/Text";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GoBack from "./global/GoBack";

const Auth = () => {
  return (
    <LinearGradient
      colors={["#CDEBF3", "#B3B3B3"]}
      className="p-4 flex-col justify-between h-full"
    >
      <View className="rounded-2xl bg-surface flex-1 my-11 p-6">
        <GoBack />
        <View className="mt-10">
          <Text className="text-3xl text-primary" fontWeight="semiBold">
            Ingresa
          </Text>
          <View className="border border-border"></View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Auth;
