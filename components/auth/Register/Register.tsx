import { zodResolver } from "@hookform/resolvers/zod";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Controller, SubmitErrorHandler } from "react-hook-form";
import { Keyboard, ScrollView, View } from "react-native";

import { RegisterSchema, registerSchema } from "./Register.helpers";
import GoBack from "../../global/GoBack";
import Button from "../../ui/Button";
import Checkbox from "../../ui/Checkbox";
import Text from "../../ui/Text";
import TextInput from "../../ui/TextInput";
import useAuth from "@/hooks/useAuth";

const Register = () => {
  const { push } = useRouter();
  const registerFormMethods = useForm<RegisterSchema>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      code: "",
      document: "",
      email: "",
      password: "",
      terms: false,
    },
  });
  const { registerWithAccount } = useAuth();
  const { setValue, control, handleSubmit, formState, watch } =
    registerFormMethods;
  const { errors } = formState;
  const termsAccepted = watch("terms");

  const onToggleTerms = (active: boolean) => {
    setValue("terms", active);
  };

  const onSubmit = async (values: RegisterSchema) => {
    const { email, password } = values;
    try {
      Keyboard.dismiss();
      await registerWithAccount(email, password);
      push("/(home)/home");
    } catch (err) {
      console.log(err);
    }
  };

  const errorHandler: SubmitErrorHandler<RegisterSchema> = (errors) => {
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
            Regístrate
          </Text>
          <FormProvider {...registerFormMethods}>
            <View className="p-3 border border-border rounded-2xl mb-4">
              <Controller
                name="document"
                control={control}
                render={(field) => (
                  <TextInput
                    {...field}
                    onChange={(e) => setValue("document", e.nativeEvent.text)}
                    label="DNI o CE"
                    placeholder="76543210"
                    errorMessage={errors["document"]?.message}
                  />
                )}
              />
              <View className="mt-4" />
              <Controller
                name="code"
                control={control}
                render={(field) => (
                  <TextInput
                    {...field}
                    onChange={(e) => setValue("code", e.nativeEvent.text)}
                    label="Código UNMSM"
                    placeholder="22200000"
                    maxLength={8}
                    keyboardType="number-pad"
                    errorMessage={errors["code"]?.message}
                  />
                )}
              />
              <View className="mt-4" />
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
            <Checkbox
              active={termsAccepted}
              onToggle={onToggleTerms}
              label="Estoy de acuerdo con los términos de privacidad de UNMSM."
              errorMessage={
                !termsAccepted
                  ? "Debes aceptar los términos de privacidad de UNMSM"
                  : ""
              }
            />
            <Button
              className="mb-2 mt-8"
              onPress={handleSubmit(onSubmit, errorHandler)}
            >
              Registrarse
            </Button>
          </FormProvider>
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
