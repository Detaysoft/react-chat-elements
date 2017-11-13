import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MessageList from '../MessageList';

describe('MessageList component', () => {
  it('should render without issues', () => {
    const component = shallow(<MessageList />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
