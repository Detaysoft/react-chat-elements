import React, { useEffect, useMemo, useCallback } from 'react';
import { Circle } from 'progressbar.js';

let wrapper;
const ProgressCircle = ({ animate, progressOptions, className }) => {
  const bar = useMemo(
    () => {
      wrapper = document.createElement('div');
      return  new Circle(wrapper, progressOptions)
      },
    []
  );

  const node = useCallback(node => {
    if (node) {
       node.appendChild(wrapper);
    }
  }, []);

  useEffect(() => {
    bar.animate(animate);
  }, [animate, bar]);

  return <div className={className} ref={node} />;
};

export default ProgressCircle;