import loremIpsum from "lorem-ipsum";
import { useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import MessageList from "../../components/MessageList/MessageList";
import { getRandomColor, photo, token } from "../utils/common";

let clearRef = () => {};

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue(() => value + 1);
}

function MessageListExample() {
  const [mtype, setMtype] = useState<any>([
    "spotify",
    "reply",
    "meeting",
    "meetingLink",
    "photo",
    "system",
    "audio",
    "video",
    "file",
    "text",
    "location",
  ]);

  const [messageListArray, setMessageListArray] = useState<any>([]);
  const [status, setStatus] = useState<string>('');
  const messageListReferance = useRef();
  const inputReferance = useRef();

  const forceUpdate = useForceUpdate();

  const addMessage = (data: number) => {
    let Addmtype: string|number = data || token();
    switch (data) {
        case 0:
          Addmtype = 'photo';
          setStatus('sent');
          break;
        case 1:
          Addmtype = 'file';
          setStatus('sent');
          break;
        case 2:
          Addmtype = 'system';
          setStatus('received');
          break;
        case 3:
          Addmtype = 'location';
          break;
        case 4:
          Addmtype = 'spotify';
          break;
        case 5:
          Addmtype = 'meeting';
          break;
        case 6:
          Addmtype = 'video';
          setStatus('sent');
          break;
        case 7:
          Addmtype = 'audio';
          break;
        case 8:
          Addmtype = 'meetingLink';
          break;
        default:
          Addmtype = 'text';
          setStatus('read');
          break;
    }

    setMessageListArray([...messageListArray, randomMessage(Addmtype)]);
    setMtype([...mtype, Addmtype]);
    clearRef();
    forceUpdate();
  };

  const randomMessage = (_mtype: string) => {
    return {
      id: String(Math.random()),
      notch: true,
      position: token() <= 1 ? "right" : "left",
      forwarded: true,
      replyButton: true,
      removeButton: true,
      retracted: false,
      status: status,
      date: +new Date(),
      type: _mtype,
      title: loremIpsum({ count: 2, units: "words" }),
      titleColor: getRandomColor(),
      text:
        _mtype === "spotify"
          ? "spotify:track:0QjjaCaXE45mvhCnV3C0TA"
          : loremIpsum({ count: 1, units: "sentences" }),
      reply:
        token() >= 1
          ? {
              photoURL:
                token() >= 1 ? `data:image/png;base64,${photo(150)}` : null,
              title: loremIpsum({ count: 2, units: "words" }),
              titleColor: getRandomColor(),
              message: loremIpsum({ count: 1, units: "sentences" }),
            }
          : null,
      meeting:
        token() >= 1
          ? {
              subject: loremIpsum({ count: 2, units: "words" }),
              title: loremIpsum({ count: 2, units: "words" }),
              date: +new Date(),
              collapseTitle: loremIpsum({ count: 2, units: "words" }),
              participants: Array(token() + 6)
                .fill(1)
                .map((x) => ({
                  id: Math.floor((Math.random() * 10) % 7),
                  title: loremIpsum({ count: 1, units: "words" }),
                })),
              dataSource: Array(token() + 5)
                .fill(1)
                .map((x) => ({
                  id: String(Math.random()),
                  avatar: `data:image/png;base64,${photo(20)}`,
                  message: loremIpsum({ count: 1, units: "sentences" }),
                  title: loremIpsum({ count: 2, units: "words" }),
                  avatarFlexible: true,
                  date: +new Date(),
                  event: {
                    title: loremIpsum({ count: 2, units: "words" }),
                    avatars: Array(token() + 2)
                      .fill(1)
                      .map((x) => ({
                        src: `data:image/png;base64,${photo(20)}`,
                        title: "react, rce",
                      })),
                    avatarsLimit: 5,
                  },
                  record: {
                    avatar: `data:image/png;base64,${photo(20)}`,
                    title: loremIpsum({ count: 1, units: "words" }),
                    savedBy:
                      "Kaydeden: " + loremIpsum({ count: 2, units: "words" }),
                    time: new Date().toLocaleString(),
                  },
                })),
            }
          : null,
      photoMsg: {
        data: {
          uri: `data:image/png;base64,${photo(150)}`,
          status: {
            click: true,
            loading: 0.5,
            download: _mtype === "video",
          },
          width: 300,
          height: 300,
        },
        onLoad: () => {
          console.log("Photo loaded");
        },
      },
      videoMsg: {
        data: {
          videoURL:
            token() >= 1
              ? "https://www.w3schools.com/html/mov_bbb.mp4"
              : "http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4",
          uri: `data:image/png;base64,${photo(150)}`,
          status: {
            click: true,
            loading: 0.5,
            download: _mtype === "video",
          },
          width: 300,
          height: 300,
        },
        onLoad: () => {
          console.log("Video loaded");
        },
      },
      systemMsg: {
        text: loremIpsum({ count: 2, units: "words" }),
      },
      audioMsg: {
        data: {
          audioURL: "https://www.w3schools.com/html/horse.mp3",
          audioType: "audio/mp3",
          controlsList: "nodownload",
        },
      },
      fileMsg: {
        data: {
          status: {
            click: true,
            loading: 0.5,
            download: _mtype === "video",
          },
          size: "100MB",
        },
      },
      locationMsg: {
        data: {
          latitude: "37.773972",
          longitude: "-122.431297",
          staticURL:
            "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-circle+FF0000(LONGITUDE,LATITUDE)/LONGITUDE,LATITUDE,ZOOM/270x200@2x?access_token=KEY",
        },
      },
      spotifyMsg: {
        data: {
          theme: "white",
          view: "list",
          width: 300,
          height: 300,
          uri: "spotify:track:0QjjaCaXE45mvhCnV3C0TA",
        },
      },
      onLoad: () => {
        console.log("Photo loaded");
      },
      onReplyMessageClick: () => {
        console.log("onReplyMessageClick");
      },
      onRemoveMessageClick: () => {
        console.log("onRemoveMessageClick");
      },
    }
  };

  useEffect(() => {
    randomMessage('text');
  }, []);

  return (
    <div className="right-panel">
      <MessageList
        className="message-list"
        referance={messageListReferance}
        dataSource={messageListArray}
        lockable={true}
        downButton={false}
        downButtonBadge={10}
        sendMessagePreview={true}
      />

      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          left: 0,
          margin: "0 auto 1rem auto",
          width: "60%",
        }}
      >
        <Input
          placeholder="Mesajınızı buraya yazınız."
          defaultValue=""
          referance={inputReferance}
          clear={(clear: any) => (clearRef = clear)}
          maxHeight={50}
          onKeyPress={(e: any) => {
            if (e.shiftKey && e.charCode === 13) {
              return true;
            }
            if (e.charCode === 13) {
              clearRef();
              addMessage(token());
            }
          }}
          rightButtons={
            <Button
              text='Gönder'
              onClick={() => addMessage(token())} />
          }
        />
      </div>
    </div>
  );
}

export default MessageListExample;
