import React from "react";
import Text from "./ui/Text";
import { ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GoBack from "./global/GoBack";
import TextInput from "./ui/TextInput";
import Button from "./ui/Button";
import { Link } from "expo-router";
import AuthProviders from "./AuthProviders";
import Checkbox from "./ui/Checkbox";

const Register = () => {
  return (
    <LinearGradient
      colors={["#CDEBF3", "#B3B3B3"]}
      className="p-4 flex-col justify-between h-full"
    >
      <View className="rounded-2xl bg-surface flex-1 my-11 p-6">
        <GoBack />
        <ScrollView className="mt-10">
          <Text className="text-3xl text-primary mb-8" fontWeight="semiBold">
            Regístrate
          </Text>
          <View className="p-3 border border-border rounded-2xl mb-4">
            <TextInput label="DNI o CE" placeholder="76543210" />
            <View className="mt-4" />
            <TextInput
              label="Código UNMSM"
              placeholder="22200000"
              maxLength={8}
              keyboardType="number-pad"
            />
            <View className="mt-4" />
            <TextInput
              label="Email UNMSM"
              placeholder="myemail@unmsm.edu.pe"
              keyboardType="email-address"
            />
            <View className="mt-4" />
            <TextInput
              label="Contraseña"
              placeholder="••••••••"
              secureTextEntry
            />
          </View>
          <Checkbox label="Estoy de acuerdo con los términos de privacidad de UNMSM." />
          <Button className="mb-2 mt-8">Registrarse</Button>
          <View className="flex flex-row justify-center items-center">
            <Text>¿Ya tienes una cuenta?, </Text>
            <Link
              href="/(auth)/login"
              replace
              className="text-primary underline"
            >
              ingresa
            </Link>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default Register;
