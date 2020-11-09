import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import VideoMessage from '../VideoMessage';

describe('VideoMessage component', () => {
  it('should render without issues', () => {
    const component = shallow(<VideoMessage />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
