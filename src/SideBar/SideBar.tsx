import React from 'react';
import './SideBar.css';

import classNames from 'classnames';

interface ISideBar {
  top?: React.ReactChild;
  center?: React.ReactChild;
  bottom?: React.ReactChild;
  type?: string;
  className?: string;
}

interface ISideBarProps {
  data?: ISideBar;
}

const SideBar:React.FC<ISideBarProps> = (props) => {
  return (
    <div className={classNames('rce-sbar', props.data?.type, props.data?.className)}>
      <div className='rce-sbar-item'>
        {props.data?.top}
      </div>
      <div className='rce-sbar-item rce-sbar-item__center'>
        {props.data?.center}
      </div>
      <div className='rce-sbar-item'>
        {props.data?.bottom}
      </div>
    </div>
  );
}

export default SideBar;
