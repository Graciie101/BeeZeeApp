import React, {FC} from 'react';
import { ICourse } from 'models';
import { Card } from 'antd';
import './styles.scss';

interface IProps {
  readonly course: ICourse;
};

export const CourseItem: FC<IProps> = ({course}) => {
  return (
    <Card
      hoverable
      title={course.name}>
      <p>{course.code}</p>
      <p>{course.description}</p>
    </Card>
  );
}

export default CourseItem;
