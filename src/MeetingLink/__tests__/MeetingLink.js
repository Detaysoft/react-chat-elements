import React, { Component } from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MeetingLink from '../MeetingLink'

describe('MeetingLink component', () => {
  it('should render without issues', () => {
    const component = shallow(<MeetingLink status='read' />)

    expect(component.length).toBe(1)
    expect(toJson(component)).toMatchSnapshot()
  })
})
