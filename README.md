# react-chat-elements
Reactjs chat elements

## Components
1. [ChatItem](#chatitem-component)
2. [MessageBox](#messagebox-component)
3. [SystemMessage](#systemmessage-component)
4. [MessageList](#messagelist-component)
5. [ChatList](#chatlist-component)
6. [Input](#input-component)
7. [Button](#button-component)
8. [Popup](#popup-component)

## ChatItem Component

![chatitem-photo](https://user-images.githubusercontent.com/15075759/29243612-d7f45ce0-7fab-11e7-96ce-7792e861d6aa.png)

```javascript
import { ChatItem } from 'react-chat-elements'

<ChatItem
    avatar={'https://facebook.github.io/react/img/logo.svg'}
    alt={'Reactjs'}
    title={'Facebook'}
    subtitle={'What are you doing?'}
    date={new Date()}
    unread={0} />
```
#### ChatItem props

| prop | default | type | description |
| ---- | ---- | ---- | ---- |
| avatar | none | string | ChatItem avatar photo url |
| alt | none | string | ChatItem avatar photo alt text |
| title | none | string | ChatItem title |
| subtitle | none | string | ChatItem subtitle |
| date | none | date | ChatItem date |
| unread | 0 | int | ChatItem unread count |


## MessageBox Component

| file | photo | text |
| ---- | ---- | ---- |
| ![file-message](https://user-images.githubusercontent.com/15075759/29243524-786baf8c-7fa9-11e7-92b2-3960cc34fcf4.png) | ![photo-message](https://user-images.githubusercontent.com/15075759/29243556-1368c4e8-7faa-11e7-9fdd-57b67542c381.png) | ![text-message](https://user-images.githubusercontent.com/15075759/29243573-a809456e-7faa-11e7-97b4-d258bc6a7728.png) |


```javascript
import { MessageBox } from 'react-chat-elements'

<MessageBox
    position={'left'}
    type={'photo'}
    text={'react.svg'}
    data={{
        uri: 'https://facebook.github.io/react/img/logo.svg',
        status: {
            click: false,
            loading: 0,
        }
    }}/>
```

#### MessageBox props

| prop | default | type | description |
| ---- | ---- | ---- | ---- |
| position | left | string | message box position |
| type | text | string | message type (text, photo, file) |
| text | none | string | message text |
| data | {} | object | message data |


## SystemMessage Component

```javascript
import { SystemMessage } from 'react-chat-elements'

<SystemMessage
    text={'End of conversation'}/>
```

#### SystemMessage props

| prop | default | type | description |
| ---- | ---- | ---- | ---- |
| text| none | string | message text |


## MessageList Component

![messagelist-photo](https://user-images.githubusercontent.com/15075759/29243641-932f3188-7fac-11e7-918d-a434bffc690e.png)

```javascript
import { MessageList } from 'react-chat-elements'

<MessageList
    className='message-list'
    dataSource={[
        {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
        },
        .
        .
        .
    ]} />
```

#### MessageList props

| prop | default | type | description |
| ---- | ---- | ---- | ---- |
| className | none | string | optional message list className |
| dataSource | [] | array | message list array |


## ChatList Component

![chatlist-photo](https://user-images.githubusercontent.com/15075759/29243666-2f147e14-7fad-11e7-9c8b-717cc3cdd0c6.png)

```javascript
import { ChatList } from 'react-chat-elements'

<ChatList
    className='chat-list'
    dataSource={[
        {
            avatar: 'https://facebook.github.io/react/img/logo.svg',
            alt: 'Reactjs',
            title: 'Facebook',
            subtitle: 'What are you doing?',
            date: new Date(),
            unread: 0,
        },
        .
        .
        .
    ]} />
```

#### ChatList props

| prop | default | type | description |
| ---- | ---- | ---- | ---- |
| className | none | string | optional chat list className |
| dataSource | [] | array | chat list array |

## Input Component

```javascript
import { Input } from 'react-chat-elements'

<Input
    placeholder={'Type here...'} />
```

#### Input props

| prop | default | type | description |
| ---- | ---- | ---- | ---- |
| className | none | string | optional input className |
| placeholder | none | string | input placeholder text |
| defaultValue | none | string | input default value |
| onChange | none | object | input onChange function |

## Button Component

```javascript
import { Button } from 'react-chat-elements'

<Button
    text={'click me!'} />
```

#### Button props

| prop | default | type | description |
| ---- | ---- | ---- | ---- |
| type | none | string | button type (outlined, transparent) |
| disabled | none | string | button is disabled? |
| text | none | string | button text |

## Popup Component

```javascript
import { Popup } from 'react-chat-elements'

<Popup
    show={this.state.show}
    header='Lorem ipsum dolor sit amet.'
    headerButtons={[{
        type: 'transparent',
        color:'black',
        text: 'close',
        onClick: () => {
            this.setState({show: false})
        }
    }]}
    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem animi veniam voluptas eius!'
    footerButtons={[{
        color:'white',
        backgroundColor:'#ff5e3e',
        text:"Vazgeç",
    },{
        color:'white',
        backgroundColor:'lightgreen',
        text:"Tamam",
    }]}/>
```

#### Popup props

| prop | default | type | description |
| ---- | ---- | ---- | ---- |
| show | false | bool | popup visible |
| header | none | string | popup title (header) message |
| headerButtons | none | array | popup title (header) buttons |
| text | none | string | popup content (center) message |
| color | #333 | string (color) | popup content message color |
| footerButtons | none | array | popup footer buttons |
| renderHeader | none | function (component) | render header function |
| renderContent | none | function (component) | render content function |
| renderFooter | none | function (component) | render footer function |
