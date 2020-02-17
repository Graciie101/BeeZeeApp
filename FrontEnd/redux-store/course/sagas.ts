import { all, call, takeLatest, put } from 'redux-saga/effects';
import { fetchAllCoursesApi } from 'api/coursesApi';
import {
 FETCH_COURSES,
/* new-constant-import-goes-here */
} from './constants';
import {
   fetchCoursesSuccess, fetchCoursesError
  /* new-action-import-goes-here */
} from './actions';

function* fetchCoursesSaga() {
  const response = yield call(fetchAllCoursesApi);

  try {
    const { status, data } = response;

    if (status === 200) {
      yield put(fetchCoursesSuccess(data));
    } else {
      yield put(fetchCoursesError('Sorry! An error occured!'));
    }
  } catch (error) {
    yield put(fetchCoursesError('Sorry! An error occured!'));
  }
}

/* new-saga-goes-here */
export default function* rootSaga() {
  yield all([takeLatest(FETCH_COURSES, fetchCoursesSaga)]);
}

