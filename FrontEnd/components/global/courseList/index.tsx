import React, {FC} from 'react';
import uuid from 'uuid/v4';
import CourseItem from '../courseItem';
import { createSelector } from 'reselect';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { ICourse } from 'models';
import './styles.scss';
import { selectAllCourses } from 'redux-store/course/selectors';

interface IProps {
  readonly courses: ICourse[];
};

export const CourseList: FC<IProps> = ({courses}) => (
  <React.Fragment>
  <h1>Courses</h1>
  {courses.map(course => (
    <CourseItem course={course} key={uuid()} />
  ))}
</React.Fragment>
);

const mapStateToProps = createSelector(
  selectAllCourses(),
  courses => ({ courses })
);

const withConnect = connect(mapStateToProps);

export default compose<IProps, IProps>(withConnect)(CourseList);