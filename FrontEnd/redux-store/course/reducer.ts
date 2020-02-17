import { 
    DEFAULT_ACTION,
    RESET_COURSE_DOABLES,
    TOGGLE_COURSE_BOOLEANABLE_STATE,
    TOGGLE_COURSE_ERRABLE_STATE,
    TOGGLE_COURSE_SUCCESSIBLE_STATE,
    /* new-constant-import-goes-here */
    FETCH_COURSES,
    FETCH_COURSES_SUCCESS,
    FETCH_COURSES_ERROR,
  } from './constants';
  
  import { ICourseState } from './state';
  import { reducerPayloadDoableHelper } from 'redux-store/rootReducer';
  
  const initialState: ICourseState = {
    courses: [],
    errable: {},
    booleanable: {},
    successible: {},
  };
  
  export default (
    state: ICourseState = initialState,
    { type, payload: incomingPayload }: ReduxActions.Action<ICourseState>
  ) => {
    const payload =
      type === RESET_COURSE_DOABLES
        ? incomingPayload
        : (reducerPayloadDoableHelper(state, incomingPayload) as ICourseState);
  
    switch (type) {
      case TOGGLE_COURSE_BOOLEANABLE_STATE:
      case TOGGLE_COURSE_ERRABLE_STATE:
      case TOGGLE_COURSE_SUCCESSIBLE_STATE:
      /* new-constant-cases-go-here */
      case FETCH_COURSES:
      case FETCH_COURSES_SUCCESS:
      case FETCH_COURSES_ERROR:
      case DEFAULT_ACTION:
        return {
          ...state, 
          ...payload,
        }
      default:
        return state;
    }
  };
  
  