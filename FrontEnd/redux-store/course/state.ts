import { ICourse } from "models";

export type CourseErrable =
'fetchCoursesErrorMsg';
  /* new-errable-goes-here */;

export type CourseBooleanable =
'isFetchingCourses';
  /* new-booleanable-goes-here */;

export type CourseSuccessible =
'fetchCoursesSuccessMsg';
  /* new-successible-goes-here */;

export interface ICourseState{
  readonly courses?: ICourse[];
  //#region Doables
  readonly errable?: { [key in CourseErrable]?: string };
  readonly booleanable?: { [key in CourseBooleanable]?: boolean };
  readonly successible?: { [key in CourseSuccessible]?: string };
  //#endregion
}
