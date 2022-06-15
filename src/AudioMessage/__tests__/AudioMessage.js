import React, { Component } from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AudioMessage from '../AudioMessage'

describe('AudioMessage component', () => {
  it('should render without issues', () => {
    const component = shallow(<AudioMessage />)
    expect(component.length).toBe(1)
    expect(toJson(component)).toMatchSnapshot()
  })
})
