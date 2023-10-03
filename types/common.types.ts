import { CourseIcon } from "./icons.types";

export interface Course {
  name: string;
  code: string;
  icon: CourseIcon;
  academicInfo: AcademicInfo[];
}

export interface AcademicInfo {
  yearPlan: string;
  credits: number;
  semester: number;
  isActive: boolean;
  teacherId: string | null;
}
