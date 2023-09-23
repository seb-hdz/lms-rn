import React from "react";
import Text from "./ui/Text";
import { ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GoBack from "./global/GoBack";
import TextInput from "./ui/TextInput";
import Button from "./ui/Button";
import { Link } from "expo-router";
import AuthProviders from "./AuthProviders";

const Login = () => {
  return (
    <LinearGradient
      colors={["#CDEBF3", "#B3B3B3"]}
      className="p-4 flex-col justify-between h-full"
    >
      <View className="rounded-2xl bg-surface flex-1 my-11 p-6">
        <GoBack />
        <ScrollView className="mt-10">
          <Text className="text-3xl text-primary mb-8" fontWeight="semiBold">
            Ingresa
          </Text>
          <View className="p-3 border border-border rounded-2xl mb-8">
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
          <Button className="mb-2">Ingresar</Button>
          <Link
            href="/(auth)/recover"
            className="text-primary underline text-center"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <View className="my-5 bg-border h-[1]" />
          <AuthProviders />
          <View className="flex flex-row justify-center items-center mt-8">
            <Text>¿No tienes una cuenta?, </Text>
            <Link href="/register" replace className="text-primary underline">
              únete
            </Link>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default Login;
