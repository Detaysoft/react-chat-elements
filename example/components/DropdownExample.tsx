import Dropdown from '../../src/Dropdown/Dropdown'

import { HugeiconsIcon } from '@hugeicons/react';
// @ts-ignore
import { MoreVerticalIcon, SquareIcon } from '@hugeicons/core-free-icons';

function DropdownExample() {
  return (
    <div>
      <Dropdown
        onSelect={(e: any) => {
          console.log(e)
        }}
        animationPosition='norteast'
        title='Dropdown Title'
        buttonProps={{
          type: 'transparent',
          color: '#929292',
          icon: {
            component: <HugeiconsIcon icon={MoreVerticalIcon} />,
            size: 24,
          },
        }}
        items={[
          {
            icon: {
              component: <HugeiconsIcon icon={SquareIcon} />,
              float: 'left',
              size: 22,
            },
            text: 'Menu Item',
          },
          {
            icon: {
              component: <HugeiconsIcon icon={SquareIcon} />,
              float: 'left',
              color: 'purple',
              size: 22,
            },
            text: 'Menu Item',
          },
          {
            icon: {
              component: <HugeiconsIcon icon={SquareIcon} />,
              float: 'left',
              color: 'yellow',
              size: 22,
            },
            text: 'Menu Item',
          },
        ]}
      />
    </div>
  )
}

export default DropdownExample
