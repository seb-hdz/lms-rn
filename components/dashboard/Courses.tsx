import React from "react";
import Text from "../ui/Text";
import { FlatList, ScrollView, View } from "react-native";
import GoBack from "../global/GoBack";
import Button from "../ui/Button";

import BellSVG from "assets/icons/bell.svg";
import { Course } from "@/types/common.types";
import CourseCard from "./CourseCard";
import MenuOptionRow from "../ui/MenuOptionRow";
import { renderMultiple } from "../../utils/utils";
import Spacer from "../ui/Separator";

const _courses: Course[] = [
  {
    code: "CC01",
    name: "Analítica de Datos",
    icon: "book",
    academicInfo: [
      {
        credits: 4,
        semester: 1,
        yearPlan: "2015",
        isActive: true,
        teacherId: "1",
      },
    ],
  },
  {
    code: "CC02",
    name: "Cálculo II",
    icon: "bookAlt",
    academicInfo: [
      {
        credits: 5,
        semester: 2,
        yearPlan: "2015",
        isActive: true,
        teacherId: "2",
      },
    ],
  },
];

const Courses = () => {
  const Header = () => (
    <View className="flex-row items-center justify-between mb-10 px-6">
      <GoBack showText={false} iconClassName="[&_path]:fill-kWhite" />
      <Text fontWeight="medium" className="text-xl text-kWhite">
        Mis cursos
      </Text>
      <Button noText className="p-1.5 rounded-lg bg-secondary">
        <BellSVG />
      </Button>
    </View>
  );

  const renderCourses = () => (
    <FlatList
      className="h-72 ml-6"
      showsHorizontalScrollIndicator={false}
      horizontal
      data={_courses}
      renderItem={({ item }) => <CourseCard course={item} />}
    />
  );

  return (
    <View className="bg-secondary h-full pt-6">
      <Header />
      {renderCourses()}
      <View className="bg-surfaceAlt rounded-t-2xl px-4">
        <View className="flex-row w-full items-center justify-center mt-3 mb-6">
          <View className="w-10 h-1 rounded-sm bg-dimmed" />
        </View>
        <ScrollView className="h-96">
          <Text fontWeight="semiBold" className="text-2xl text-black mb-5">
            Pusi Tai
          </Text>
          {/* General info */}
          <View className="rounded-xl overflow-hidden">
            <MenuOptionRow
              variant="header"
              optionName="Información general del curso"
            />
            <MenuOptionRow optionName="Código" optionInfo="123" />
            <MenuOptionRow
              optionName="Docente"
              optionInfo="Juan Pérez"
              noSeparator
            />
          </View>
          {/* Classes */}
          <View className="rounded-xl overflow-hidden mt-8">
            <MenuOptionRow variant="header" optionName="Clases" />
            {renderMultiple(
              15,
              <MenuOptionRow
                optionName="Semana 1"
                optionDescription="Introducción al curso, presentación del sílabo"
              />
            )}
            <MenuOptionRow
              optionName="Semana 1"
              optionDescription="Introducción al curso, presentación del sílabo"
              noSeparator
            />
          </View>
          <Spacer classNames="h-6 w-full" />
        </ScrollView>
      </View>
    </View>
  );
};

export default Courses;
