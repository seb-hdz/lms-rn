import { Course } from "@/types/common.types";
import { CourseIcon } from "@/types/icons.types";
import React from "react";
import { View } from "react-native";
import Text from "../ui/Text";

import ChevronSVG from "assets/icons/chevron.svg";
import { jn } from "@/utils/utils";

interface CourseCardProps {
  className?: string;
  course: Course;
}

const CourseCard = (props: CourseCardProps) => {
  const { className, course } = props;
  const { icon, name } = course;

  const renderCourseIcon = (icon: CourseIcon) => {
    switch (icon) {
      case "book":
        return <Text className="text-5xl">📖</Text>;
      case "bookAlt":
        return <Text className="text-5xl">📚</Text>;
    }
  };

  return (
    <View
      className={jn(
        "CourseCard",
        "bg-surface rounded-2xl h-72 w-56 py-8 px-5 mr-4",
        className
      )}
    >
      {renderCourseIcon(icon)}
      <View className="flex-row justify-between items-end mt-32">
        <Text
          fontWeight="semiBold"
          numberOfLines={2}
          className="w-32 truncate text-2xl leading-6 tracking-tighter text-black"
        >
          {name}
        </Text>
        <ChevronSVG className="rotate-180" stroke="#000" />
      </View>
    </View>
  );
};

export default CourseCard;
