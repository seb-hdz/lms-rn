import React from "react";
import { Image, View } from "react-native";
import Text from "../ui/Text";
import AIButton from "../global/AIButton";
import { Link } from "expo-router";

const Dashboard = () => {
  const Header = () => (
    <View className="flex-row justify-between items-start">
      <View>
        <Text fontWeight="medium" className="text-xl">
          Buen día,
        </Text>
        <Text fontWeight="semiBold" className="text-2xl text-kWhite">
          Madonna
        </Text>
      </View>
      <Image
        className="h-8 w-8 rounded-full mt-1"
        source={{ uri: "https://picsum.photos/32" }}
      />
    </View>
  );

  return (
    <View className="p-4 flex-col justify-between h-full bg-secondary">
      <Header />
      <View>
        <Link href="/(dashboard)/courses">Mis cursos</Link>
        <Link href="/(dashboard)/courses">Mi horario</Link>
        <Link href="/(dashboard)/courses">Mis tareas</Link>
      </View>
      <View className="flex items-end">
        <AIButton />
      </View>
    </View>
  );
};

export default Dashboard;
