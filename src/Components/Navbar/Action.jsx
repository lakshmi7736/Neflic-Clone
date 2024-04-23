import React from 'react'
import "./Action.css"
import RowPost from '../RowPost/RowPost'
import {action} from '../../urls'

const Action = () => {
  return (
      <div className='list'>
         <RowPost url={action} title='Action' isSmall />
      </div>
  )
}

export default Action
