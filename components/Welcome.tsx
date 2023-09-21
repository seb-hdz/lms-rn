import React from "react";
import { View } from "react-native";
import Text from "./ui/Text";
import Button from "./ui/Button";

import LogoSVG from "assets/images/logo.svg";

const Welcome = () => {
  return (
    <View className="p-4 flex-col justify-between h-full">
      <View>
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
      <View>
        <Text className="mb-2">Estudiante UNMSM,</Text>
        <Button>Continuar</Button>
        <View className="flex-row justify-center mt-3">
          <Text>¿No tienes una cuenta?, </Text>
          <Text className="text-primary">únete</Text>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
