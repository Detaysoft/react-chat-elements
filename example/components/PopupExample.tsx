import { useState } from 'react'
import Button from '../../src/Button/Button'
import Popup from '../../src/Popup/Popup'

import { HugeiconsIcon } from '@hugeicons/react';
// @ts-ignore
import { Cancel01Icon } from '@hugeicons/core-free-icons';

function PopupExample() {
  const [show, setShow] = useState<boolean>(false)
  return (
    <div className=''>
      {' '}
      <Popup
        popup={{
          show: show,
          header: 'Lorem ipsum dolor sit amet.',
          headerButtons: [
            {
              type: 'transparent',
              color: 'black',
              onClick: () => {
                setShow(false)
              },
              icon: {
                component: <HugeiconsIcon icon={Cancel01Icon} />,
                size: 18,
              },
            },
          ],
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem animi veniam voluptas eius!',
          footerButtons: [
            {
              color: 'white',
              backgroundColor: '#ff5e3e',
              text: 'Vazgeç',
              onClick: () => {
                setShow(false)
              },
            },
            {
              color: 'white',
              backgroundColor: 'lightgreen',
              text: 'Tamam',
              onClick: () => {
                setShow(false)
              },
            },
          ],
        }}
      />
      <Button
        text='Show Popup'
        onClick={() => {
          setShow(true)
        }}
      />
    </div>
  )
}

export default PopupExample
