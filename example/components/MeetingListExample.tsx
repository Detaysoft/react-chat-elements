import loremIpsum from 'lorem-ipsum'
import { useEffect, useState } from 'react'
import MeetingList from '../../src/MeetingList/MeetingList'
import { photo, token } from '../utils/common'

function MeetingListExample() {
  const [meetingListArray, setMeetingListArray] = useState<any>([])

  useEffect(() => {
    if (meetingListArray.length === 5) return
    setMeetingListArray([
      ...meetingListArray,
      {
        id: String(Math.random()),
        closable: true,
        avatars: Array(token() + 2)
          .fill(1)
          .map(x => ({
            src: `data:image/png;base64,${photo(20)}`,
            title: 'react, rce',
          })),
        avatarFlexible: true,
        date: +new Date(),
        subject: loremIpsum({ count: 2, units: 'words' }),
        subjectLimit: 25,
        avatarLimit: 5,
      },
    ])
  }, [meetingListArray])

  return (
    <div>
      <MeetingList onMeetingClick={console.log} onShareClick={console.log} dataSource={meetingListArray} />
    </div>
  )
}

export default MeetingListExample
