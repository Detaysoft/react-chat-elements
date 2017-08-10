import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SystemMessage from '../SystemMessage';

describe('SystemMessage component', () => {
  it('should render without issues', () => {
    const component = shallow(<SystemMessage />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});