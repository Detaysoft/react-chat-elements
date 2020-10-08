import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MeetingMessage from '../MeetingMessage';

describe('MeetingMessage component', () => {
  it('should render without issues', () => {
    const component = shallow(<MeetingMessage />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
