<details open>
<summary>12.0.4 Updates</summary>
<br>

# Meeting Link changes

## You can render custom meeting link action buttons

### New usage;

```js

import { MeetlingLink } from 'react-chat-elements'

<MeetlingLink
	actionButtons={[
		{
			onClickButton: test => {
				console.log(test)
			},
			Component: () => <div>Test</div>,
		},
		{
			onClickButton: test => {
				console.log(test)
			},
			Component: () => <div>Test</div>,
		},
	]}
	.
	.
	.
/>
```

### In MessageList component usage;

```js
import { MessageList } from 'react-chat-elements'

<MessageList
	actionButtons={[
		{
			onClickButton: test => {
				console.log(test)
			},
			Component: () => <div>Test</div>,
		},
		{
			onClickButton: test => {
				console.log(test)
			},
			Component: () => <div>Test</div>,
		},
	]}
	.
	.
	.
/>
```

</details>

<br>

<details >
<summary>12.0.0 Updates</summary>
<br>

# typescript support

</details>
<br>

<details>
<summary>11.0.0 Updates</summary>
<br>

This update target to fix component ref broken problems

Fixed issues:

- https://github.com/Detaysoft/react-chat-elements/issues/158
- https://github.com/Detaysoft/react-chat-elements/issues/157
- https://github.com/Detaysoft/react-chat-elements/issues/142

1.  All react-chat-elements components turneded to function component for "ref" property problems.

2.  In the [Input](https://github.com/Detaysoft/react-chat-elements#input-component) component `referance={...}` instead of use `ref={...}`

3.  **10.16.2** and before vesion usage

    **Before usage**: this.refs.input.clear();

    After **11.0.0** version usage is:

    ```js
    import { Input } from 'react-chat-elements'

    <Input
    	ref='input'
    	placeholder="Type here..."
    	multiline={true}
    	.
    	.
    	.
    />
    ```

    New usage in **class component**: clearRef();

    ```js

    import { Input } from 'react-chat-elements'
    let clearRef = () => {};
    this.inputReferance = React.createRef();

    <Input
    	referance={this.inputReferance}
    	clear={(clear) => clearRef = clear}
    	placeholder="Type here..."
    	multiline={true}
    	.
    	.
    	.
    />

    ```

    New usage in **function component**: clearRef();

    ```js

    import { Input } from 'react-chat-elements'
    let clearRef = () => {};
    const inputReferance = React.useRef();

    <Input
    	referance={inputReferance}
    	clear={(clear) => clearRef = clear}
    	placeholder="Type here..."
    	multiline={true}
    	.
    	.
    	.
    />

    ```

4.  In the [MessageList](https://github.com/Detaysoft/react-chat-elements#messagelist-component) component usage `referance={...}` instead of use `ref={...}`

    **Class Component:**

    ```js
    import { MessageList } from 'react-chat-elements'
    this.messageList = React.createRef();

    <MessageList
    	referance={this.messageList}
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

    **Function Component:**

    ```js
    import { MessageList } from 'react-chat-elements'
    const messageListReferance = React.useRef();

    <MessageList
    	referance={messageListReferance}
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

</details>
