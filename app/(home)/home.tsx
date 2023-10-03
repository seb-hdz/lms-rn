import Dashboard from "@/components/dashboard/Dashboard";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      {/* // TODO: debe ser home */}
      <Dashboard />
    </SafeAreaView>
  );
};

export default HomeScreen;
