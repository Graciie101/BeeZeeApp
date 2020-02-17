import { createAction } from 'redux-actions';
import {
  RESET_COURSE_DOABLES,
  TOGGLE_COURSE_BOOLEANABLE_STATE,
  TOGGLE_COURSE_ERRABLE_STATE,
  TOGGLE_COURSE_SUCCESSIBLE_STATE,
  /* new-constant-import-goes-here */
  FETCH_COURSES,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_ERROR,
} from './constants';
import { ICourse } from 'models';

import {
  ICourseState,
  CourseErrable,
  CourseBooleanable,
  CourseSuccessible,
} from './state';

export const fetchCourses = createAction<ICourseState>(FETCH_COURSES, () => ({
  booleanable: { isFetchingCourses: true },
  errable: { fetchCoursesErrorMsg: null },
  successible: { fetchCoursesSuccessMsg: null }, // Not always necessary. Just for demonstration on how to use it
}));

export const fetchCoursesSuccess = createAction<ICourseState, ICourse[]>(FETCH_COURSES_SUCCESS, courses => ({
  courses,
  successible: { fetchCoursesSuccessMsg: 'Yay, We got the Courses back!' },
  booleanable: { isFetchingCourses: false },
}));

export const fetchCoursesError = createAction<ICourseState, string>(FETCH_COURSES_ERROR, fetchCoursesErrorMsg => ({
  errable: { fetchCoursesErrorMsg },
  booleanable: { isFetchingCourses: false },
}));

//#region Doables
export const resetCourseDoables = createAction<ICourseState>(RESET_COURSE_DOABLES, () => ({
  errable: {},
  booleanable: {},
  successible: {},
}));

export const toggleCourseBooleanableState = createAction<
  ICourseState,
  { [key in CourseBooleanable]?: boolean }
>(TOGGLE_COURSE_BOOLEANABLE_STATE, key => ({
  booleanable: key,
}));

export const toggleCourseErrableState = createAction<ICourseState, { [key in CourseErrable]?: string }>(
  TOGGLE_COURSE_ERRABLE_STATE,
  key => ({
    errable: key,
  })
);

export const toggleCourseSuccessibleState = createAction<
  ICourseState,
  { [key in CourseSuccessible]?: string }
>(TOGGLE_COURSE_SUCCESSIBLE_STATE, key => ({
  successible: key,
}));
//#endregion

/* new-actions-go-here */