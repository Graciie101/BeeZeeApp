/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { CourseItem } from '@root/components/courseItem';


const defaultComponent = <CourseItem t={() => {}} />;

test('CourseItem is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
