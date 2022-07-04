import { useEffect, useMemo, useCallback } from 'react'
import { Circle } from 'progressbar.js'
import { ICircleProps } from '../type'

let wrapper: HTMLDivElement
const ProgressCircle: React.FC<ICircleProps> = ({ animate, progressOptions, className }) => {
  const bar = useMemo(() => {
    wrapper = document.createElement('div')
    return new Circle(wrapper, progressOptions)
  }, [])

  const node = useCallback((node: any) => {
    if (node) {
      node.appendChild(wrapper)
    }
  }, [])

  useEffect(() => {
    bar.animate(animate)
  }, [animate, bar])

  return <div className={className} ref={node} />
}

export default ProgressCircle
