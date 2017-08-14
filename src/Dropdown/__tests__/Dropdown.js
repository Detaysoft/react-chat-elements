import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dropdown from '../Dropdown';

describe('Avatar component', () => {
  it('should render without issues', () => {
    const component = shallow(<Dropdown />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});