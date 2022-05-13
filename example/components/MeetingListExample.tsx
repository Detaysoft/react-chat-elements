import loremIpsum from 'lorem-ipsum';
import MeetingList from '../../components/MeetingList/MeetingList';
import { photo, token } from '../utils/common';

function MeetingListExample() {
  return (
    <div>
      <MeetingList
        onMeetingClick={console.log}
        onShareClick={console.log}
        dataSource={[{
          id: String(Math.random()),
          closable: true,
          avatars: Array(token() + 2)
              .fill(1)
              .map((x) => ({
                src: `data:image/png;base64,${photo(20)}`,
                title: "react, rce",
              })),
          avatarFlexible: true,
          date: +new Date(),
          subject: loremIpsum({ count: 2, units: "words" }),
          subjectLimit: 25,
          avatarLimit: 5,
        }]}
        />
    </div>
  );
}

export default MeetingListExample;