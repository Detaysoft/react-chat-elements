import React, { FC } from 'react'
import './SuggestMessage.css'
import { ISuggestMessageProps } from '../type'

const SuggestMessageButtons: FC<ISuggestMessageProps> = ({ suggestMessages, messageClick }) => {
  return (
    <div className='messageButtonsContainer'>
      {suggestMessages.length > 0 && (
        <div className='messageButtons'>
          {suggestMessages.map(x => {
            return (
              <div className='messageButton' onClick={() => messageClick(x)}>
                {x}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SuggestMessageButtons
