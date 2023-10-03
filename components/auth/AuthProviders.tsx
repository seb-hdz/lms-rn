import React from "react";
import { View } from "react-native";
import Button from "../ui/Button";

const AuthProviders = () => {
  return (
    <View className="flex flex-col gap-y-3">
      <Button className="rounded-full" disabled>
        Continuar con Google
      </Button>
      <Button className="rounded-full bg-secondary" disabled>
        Continuar con Facebook
      </Button>
      <Button className="rounded-full bg-black90" disabled>
        Continuar con código OTP
      </Button>
    </View>
  );
};

export default AuthProviders;
