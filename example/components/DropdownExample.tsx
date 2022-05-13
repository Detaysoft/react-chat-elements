import { FaSquare } from 'react-icons/fa';
import { MdOutlineMoreVert } from 'react-icons/md';
import Dropdown from '../../src/Dropdown/Dropdown';

function DropdownExample() {
  return (
    <div>
      <Dropdown
        onSelect={(e: any) => {console.log(e)}}
        animationPosition="norteast"
        title="Dropdown Title"
        buttonProps={{
          type: "transparent",
          color: "#929292",
          icon: {
            component: <MdOutlineMoreVert />,
            size: 24,
          },
        }}
        items={[
          {
            icon: {
              component: <FaSquare />,
              float: "left",
              color: "red",
              size: 22,
            },
            text: "Menu Item",
          },
          {
            icon: {
              component: <FaSquare />,
              float: "left",
              color: "purple",
              size: 22,
            },
            text: "Menu Item",
          },
          {
            icon: {
              component: <FaSquare />,
              float: "left",
              color: "yellow",
              size: 22,
            },
            text: "Menu Item",
          },
        ]}
      />
    </div>
  );
}

export default DropdownExample;