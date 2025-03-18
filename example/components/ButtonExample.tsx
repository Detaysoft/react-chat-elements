import Button from '../../src/Button/Button'

import { HugeiconsIcon } from '@hugeicons/react';
// @ts-ignore
import { Chatting01Icon } from '@hugeicons/core-free-icons';

function ButtonExample() {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <span style={{ borderBottom: '1px solid #d3d3d3' }}>Icon Button</span>
        <Button
          type='transparent'
          color='black'
          icon={{
            component: <HugeiconsIcon icon={Chatting01Icon} />,
            size: 18,
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginLeft: '1rem',
        }}
      >
        <span style={{ marginBottom: '0.5rem', borderBottom: '1px solid #d3d3d3' }}>Text Button</span>
        <Button text='Count'></Button>
      </div>
    </div>
  )
}

export default ButtonExample
