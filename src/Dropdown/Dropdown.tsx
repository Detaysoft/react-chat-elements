import { useState } from 'react';
import './Dropdown.css';
import classNames from 'classnames'
import Button from '../Button/Button';

interface IDropdownProps {
  className?: string;
  buttonProps?: Object;
  animationType?: string;
  animationPosition?: string;
  title?: string;
  items: IDropdownItemType[];
  onSelect: Function;
}

type IDropdownItemType = IDropdownItem | string;

interface IDropdownItem {
  icon?: IDropdownItemIcon;
  text?: string;
}

interface IDropdownItemIcon {
  float: any;
  color: string;
  size: number;
  className: string;
  component: React.ReactChild;
}

function Dropdown(props : IDropdownProps) {
  const [show, setShow] = useState<boolean | undefined>(undefined);

  const onBlur = (e : any) => {
    if (show === true)
      setShow(false);
  }

  return (
    <div className={classNames('rce-dropdown-container', props.className)} onBlur={onBlur}>
      {
        <Button
          {...props.buttonProps}
          onClick={() => setShow(!show)} />
      }
      <div
        className={classNames(
          'rce-dropdown',
          props.animationType,
          'rce-dropdown-open__' + props.animationPosition,
          { 'dropdown-hide': show === false },
          { 'dropdown-show': show === true })}>

        <ul>
          {
            props.title &&
            <span className='rce-dropdown-title'>{props.title}</span>
          }
          {
            props.items.map((x : IDropdownItemType, i : number) => (
              <li key={i} onMouseDown={(e) => props.onSelect(i)}>
                {
                  x instanceof Object ?
                    x.icon ?
                      <span className='rce-button-icon--container'>
                        {(x.icon.float === 'right' || !x.icon.float) && <a>{x.text}</a>}

                        <span style={{ float: x.icon.float, color: x.icon.color, fontSize: x.icon.size || 12 }} className={classNames('rce-button-icon', x.icon.className)}>{x.icon.component}</span>

                        {x.icon.float === 'left' && <a>{x.text}</a>}
                      </span>
                      : <a>{x.text}</a>
                  : <a>{x}</a>
                }
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

Dropdown.defaultProps = {
  animationType: 'default',
  animationPosition: 'nortwest',
  items: [],
  onSelect: Function,
  buttonProps: null
};

export default Dropdown;
