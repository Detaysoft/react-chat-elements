import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SideBar from '../SideBar';

describe('SideBar component', () => {
  it('should render without issues', () => {
    const component = shallow(<SideBar />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});