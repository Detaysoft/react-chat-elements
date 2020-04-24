import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ReplyMessage from '../ReplyMessage';

describe('ReplyMessage component', () => {
  it('should render without issues', () => {
    const component = shallow(<ReplyMessage />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
