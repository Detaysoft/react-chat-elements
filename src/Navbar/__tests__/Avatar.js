import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  it('should render without issues', () => {
    const component = shallow(<Navbar />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});