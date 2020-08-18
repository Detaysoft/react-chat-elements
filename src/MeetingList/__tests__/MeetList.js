import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MeetingList from '../MeetingList';

describe('MeetingList component', () => {
  it('should render without issues', () => {
    const component = shallow(<MeetingList />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
