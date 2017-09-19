import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LocationMessage from '../LocationMessage';

describe('LocationMessage component', () => {
  it('should render without issues', () => {
    const component = shallow(<LocationMessage />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
