import { zodResolver } from "@hookform/resolvers/zod";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { SubmitErrorHandler, Controller } from "react-hook-form";
import { Keyboard, ScrollView, View } from "react-native";

import { LoginSchema, loginSchema } from "./Login.helpers";
import GoBack from "../../global/GoBack";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import TextInput from "../../ui/TextInput";
import AuthProviders from "../AuthProviders";
import useAuth from "@/hooks/useAuth";

const Login = () => {
  const { push } = useRouter();
  const { signInWithAccount } = useAuth();
  const loginFormMethods = useForm<LoginSchema>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { handleSubmit, formState, control, setValue } = loginFormMethods;
  const { errors } = formState;

  const onSubmit = async (values: LoginSchema) => {
    const { email, password } = values;
    try {
      Keyboard.dismiss();
      await signInWithAccount(email, password);
      push("/(home)/home");
    } catch (err) {
      console.log(err);
    }
  };

  const errorHandler: SubmitErrorHandler<LoginSchema> = (errors) => {
    console.log({ errors });
  };

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
          <FormProvider {...loginFormMethods}>
            <View className="p-3 border border-border rounded-2xl mb-8">
              <Controller
                name="email"
                control={control}
                render={(field) => (
                  <TextInput
                    {...field}
                    onChange={(e) => setValue("email", e.nativeEvent.text)}
                    label="Email UNMSM"
                    placeholder="myemail@unmsm.edu.pe"
                    keyboardType="email-address"
                    errorMessage={errors["email"]?.message}
                  />
                )}
              />
              <View className="mt-4" />
              <Controller
                name="password"
                control={control}
                render={(field) => (
                  <TextInput
                    {...field}
                    onChange={(e) => setValue("password", e.nativeEvent.text)}
                    label="Contraseña"
                    placeholder="••••••••"
                    secureTextEntry
                    errorMessage={errors["password"]?.message}
                  />
                )}
              />
            </View>
            <Button
              className="mb-2"
              onPress={handleSubmit(onSubmit, errorHandler)}
            >
              Ingresar
            </Button>
          </FormProvider>
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
