import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PhotoMessage from '../PhotoMessage';

describe('PhotoMessage component', () => {
  it('should render without issues', () => {
    const component = shallow(<PhotoMessage />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});