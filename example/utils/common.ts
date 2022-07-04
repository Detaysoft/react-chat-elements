import Identicon from 'identicon.js'
import { useState } from 'react'

export const photo = (size: number) => {
  return new Identicon(String(Math.random()) + String(Math.random()), {
    margin: 0,
    size: size || 20,
  }).toString()
}

export const getRandomColor = () => {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export const token = () => {
  return Math.floor((Math.random() * 10) % 8)
}

export function useForceUpdate() {
  const [value, setValue] = useState(0)
  return () => setValue(() => value + 1)
}
