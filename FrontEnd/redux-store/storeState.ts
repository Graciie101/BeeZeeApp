import { IPostsState } from './posts/state';
import { IStudentState } from './student/state';
import { ICourseState } from './course/state';
/* new-imported-state-goes-here */

export interface IStoreState {
  readonly posts: IPostsState;
  readonly student: IStudentState;
  readonly course: ICourseState;
	/* new-imported-state-key-goes-here */
}
