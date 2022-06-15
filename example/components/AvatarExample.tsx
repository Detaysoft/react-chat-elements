import Avatar from '../../src/Avatar/Avatar'
import { photo } from '../utils/common'

function AvatarExample() {
  return (
    <div style={{ width: 50, height: 50 }}>
      <Avatar size={{ width: 20, height: 10 }} type='circle' src={`data:image/png;base64,${photo(20)}`} />
    </div>
  )
}

export default AvatarExample
