import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchInput from '../SearchInput';

describe('SearchInput component', () => {
  it('should render without issues', () => {
    const component = shallow(<SearchInput />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});