import React, {FC, useEffect} from 'react';
import {Layout, CourseList} from 'components';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { IDispatchable } from 'models';
import { fetchCourses } from 'redux-store/course/actions';
import './styles.scss';

export const Course: FC<IDispatchable> = ({ dispatch }) => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    dispatch(fetchCourses());
  });

  return (
    <Layout title="List of Courses" description="This is the List of Courses Page">
      <CourseList courses={[]} />
    </Layout>
  );
};

export default compose<IDispatchable, IDispatchable>(connect())(Course);

/* interface IProps {};

export const Course: FC<IProps> = () => (
  <Layout title="Course" description="This is the Course Page">
    <div className="course-page">
      <p>
        This is the <strong>Course</strong> page
      </p>
    </div>
  </Layout>
);

export default Course; */
