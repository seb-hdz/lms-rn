import { useLocalSearchParams } from "expo-router";

import Text from "@/components/ui/Text";

const CourseDetailScreen = () => {
  const { slug } = useLocalSearchParams();

  return <Text>Blog post: {slug}</Text>;
};

export default CourseDetailScreen;
