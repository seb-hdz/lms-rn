import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";

import Text from "./ui/Text";
import Button from "./ui/Button";

import LogoSVG from "assets/images/logo.svg";

const Welcome = () => {
  const { push } = router;

  return (
    <LinearGradient
      colors={["#CDEBF3", "#B3B3B3"]}
      className="p-4 flex-col justify-between h-full"
    >
      <View className="mt-14">
        <View className="flex-row justify-center mb-10">
          <LogoSVG />
        </View>
        <View className="items-center">
          <Text className="text-primary text-2xl" fontWeight="semiBold">
            Te damos la bienvenida,
          </Text>
          <Text className="text-2xl" fontWeight="semiBold">
            Inicia sesión para comenzar
          </Text>
        </View>
      </View>
      <View className="mb-16">
        <Text className="mb-2">Estudiante UNMSM,</Text>
        <Button onPress={() => push("/auth")}>Continuar</Button>
        <View className="flex-row justify-center items-center mt-3">
          <Text>¿No tienes una cuenta?, </Text>
          <Link href="/auth" className="text-primary">
            únete
          </Link>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
