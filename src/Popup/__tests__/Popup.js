import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Popup from '../Popup';

describe('Popup component', () => {
  it('should render without issues', () => {
    const component = shallow(<Popup show={true}/>);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});