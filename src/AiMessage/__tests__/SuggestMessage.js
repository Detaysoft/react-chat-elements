import React, { Component } from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SuggestMessage from '../SuggestMessage'

describe('Dropdown component', () => {
  it('should render without issues', () => {
    const component = shallow(<SuggestMessage />)
    expect(component.length).toBe(1)
    expect(toJson(component)).toMatchSnapshot()
  })
})
