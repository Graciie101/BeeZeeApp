import { createSelector } from 'reselect';
import { IStoreState } from '../storeState';
import {CourseErrable, CourseBooleanable, CourseSuccessible } from './state';

export const courseState = () => (state: IStoreState) => state.course;

export const selectAllCourses = () =>
  createSelector(
    courseState(),
    state => state.courses
  );
//#region Doables
/**
 * Returns true if the evaluation of a booleanable state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectCourseBooleanableState = (key: CourseBooleanable | CourseBooleanable[]) =>
createSelector(
  courseState(),
  ({ booleanable }) => (Array.isArray(key) ? !!key.filter(k => booleanable[k]).length : booleanable[key])
);

/**
 * Returns the errable state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectCourseErrableState = (key: CourseErrable | CourseErrable[]) =>
createSelector(
  courseState(),
  ({ errable }) => (Array.isArray(key) ? !!key.filter(k => errable[k]).length : errable[key])
);

/**
 * Returns the successible state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectCourseSuccessibleState = (key: CourseSuccessible | CourseSuccessible[]) =>
createSelector(
  courseState(),
  ({ successible }) => (Array.isArray(key) ? !!key.filter(k => successible[k]).length : successible[key])
);
//#endregion