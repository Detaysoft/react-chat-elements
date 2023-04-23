import React, { Component } from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Popup from '../Popup'

describe('Popup component', () => {
  it('should render without issues', () => {
    const popup = {
      show: true,
      color: '#333',
    }
    const component = shallow(<Popup popup={popup} />)
    expect(component.length).toBe(1)
    expect(toJson(component)).toMatchSnapshot()
  })
})
