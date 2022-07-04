import { FaCircle, FaMapMarkerAlt, FaVideo } from 'react-icons/fa'
import { MdOutlineMoreVert } from 'react-icons/md'
import Avatar from '../../src/Avatar/Avatar'
import Button from '../../src/Button/Button'
import Dropdown from '../../src/Dropdown/Dropdown'
import Navbar from '../../src/Navbar/Navbar'
import { photo } from '../utils/common'

function NavbarExample() {
  return (
    <div style={{ width: '100%' }}>
      <Navbar
        className='navbar-height'
        left={
          <div className='navbar-text-overflow'>
            <div className='navbar-header-container'>
              <div
                className='navbar-user-profile'
                onClick={e => console.log(e)}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Avatar src={`data:image/png;base64,${photo(150)}`} size='small' type='circle flexible' />
                <div
                  className='navbar-user-profile-container'
                  onClick={() => {}}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginLeft: '0.5rem',
                  }}
                >
                  <span className='title' style={{ paddingLeft: ' 0.2rem' }}>
                    Bilinmiyor
                  </span>
                  {
                    <span onClick={() => {}} className='user-location' style={{ fontSize: '10px', color: '#575757' }}>
                      <FaMapMarkerAlt color='#9e9e9e' />
                      Konum bilinmiyor
                    </span>
                  }
                </div>
              </div>
            </div>
          </div>
        }
        right={
          <div className='chatlist-navbar-right'>
            <div style={{ display: 'flex' }}>
              <Button
                className='navbar-button'
                type='transparent'
                title='Konferans başlat'
                color='#5f5f5f'
                onClick={() => {}}
                icon={{
                  component: (
                    <div className='chat-list-navbar-menu-button'>
                      <FaVideo />
                    </div>
                  ),
                  size: 24,
                }}
              />
              <div onClick={e => console.log(e)}>
                <Dropdown
                  buttonProps={{
                    type: 'transparent',
                    color: '#929292',
                    icon: {
                      component: <MdOutlineMoreVert />,
                      size: 24,
                    },
                  }}
                  animationPosition='nortest'
                  onSelect={(e: any) => console.log(e)}
                  items={[
                    {
                      icon: {
                        component: <FaCircle />,
                        float: 'left',
                        color: 'blue',
                        size: 15,
                      },
                      text: 'status Text',
                    },
                  ]}
                  style={{ color: 'yellow', borderColor: 'wheat' }}
                />
              </div>
            </div>
          </div>
        }
      />
    </div>
  )
}

export default NavbarExample
