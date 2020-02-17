import postsSaga from './posts/sagas';
import student from './student/sagas';
import course from './course/sagas';
/* new-imported-saga-goes-here */

export default [
  postsSaga,
  student,
  course,
/* new-imported-saga-element-goes-here */
];
