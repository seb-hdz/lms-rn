import Welcome from "@/components/Welcome";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = () => {
  return (
    <SafeAreaView>
      <Welcome />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
