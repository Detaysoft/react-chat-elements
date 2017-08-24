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
9. [SideBar](#sidebar-component)
10. [Navbar](#navbar-component)
11. [Dropdown](#dropdown-component)

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
| onClick | none | function | ChatItem on click |



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
| id | i (index) | string | message box id |
| position | left | string | message box position |
| type | text | string | message type (text, photo, file) |
| text | none | string | message text |
| data | {} | object | message data |
| date | new Date() | Date | message date |


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
    lockable={true}
    toBottomHeight={'100%'}
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
| lockable | false | boolean | It locks to scroll position when the dataSource has been changed |
| toBottomHeight | 300 | int or string(only '100%') | If the toBottomHeight property's value higher than bottom value of the scrollbar when the data source has been changed Scrollbar goes to bottom at the end of the page. If the toBottomHeight property's value has been set **'100%'**, scrollbar goes to bottom at the end of the page when the data source has been changed. |
| onClick | none | function | message list item on click (message(object) is returned) |


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
| onClick | none | function | chat list item on click (chat(object) is returned) |

## Input Component

```javascript
import { Input } from 'react-chat-elements'

<Input
    placeholder="Type here..."
    multiline={true}
    buttons={
        <Button
            color='white'
            backgroundColor='black'
            text='Send'/>
    }/>
```

#### Input props

| prop | default | type | description |
| ---- | ---- | ---- | ---- |
| className | none | string | optional input className |
| placeholder | none | string | input placeholder text |
| defaultValue | none | string | input default value |
| onChange | none | object | input onChange function |
| multiline | false | bool | input is textarea |
| autoHeight | true | bool | input auto height |
| minHeight | 25 | int | input min height |
| maxHeight | 200 | int | input max height |
| inputStyle | none | object | inputStyle object |
| buttons | none | object(component) | buttons component |
| buttonsFloat | right | string | buttons float (right or left) |


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

## SideBar Component

```javascript
import { SideBar } from 'react-chat-elements'

<SideBar
    top={
        <div>'TOP' area</div>
    }
    center={
        <div>'CENTER' area</div>
    }
    bottom={
        <div>'BOTTOM' area</div>
    }/>
```

#### SideBar props

| prop | default | type | description |
| ---- | ---- | ---- | ---- |
| type | dark | string | popup visible |
| top | false | function (component) | popup top component |
| center | none | function (component) | popup center component |
| bottom | none | function (component) | popup bottom component |


## Navbar Component

```javascript
import { Navbar } from 'react-chat-elements'

<Navbar
    top={
        <div>'TOP' area</div>
    }
    center={
        <div>'CENTER' area</div>
    }
    bottom={
        <div>'BOTTOM' area</div>
    }/>
```

#### Navbar props

| prop | default | type | description |
| ---- | ---- | ---- | ---- |
| type | dark | string | popup visible |
| top | false | function (component) | popup top component |
| center | none | function (component) | popup center component |
| bottom | none | function (component) | popup bottom component |

## Dropdown Component

```javascript
import { Dropdown } from 'react-chat-elements'

<Dropdown
    target={{
        X: 400,
        Y: 100
    }}
    items={[
        'merhaba',
        'lorem',
        'ipsum',
        'dolor',
        'sit',
        'amet'
    ]}/>
```

#### Dropdown props

| prop | default | type | description |
| ---- | ---- | ---- | ---- |
| animationType | none | string | fade or default |
| animationPosition | nortwest | string | animation start position (nortwest, norteast, southwest, southeast) |
| items | none | array | dropdown items array |
| onSelect | none | function | item on select |
| target | { X: 0, Y: 0 } | object | dropdown target |
