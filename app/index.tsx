import Welcome from "@/components/Welcome";
import Modal, { ModalMethods } from "@/components/ui/Modal";
import React, { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = () => {
  const ref = useRef<ModalMethods>(null);

  return (
    <SafeAreaView>
      <Welcome />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
