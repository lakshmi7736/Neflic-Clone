import React from 'react'
import RowPost from '../RowPost/RowPost'
import {HorrorMovies} from '../../urls'

const Horror = () => {
  return (
    <div className='list'>
        <RowPost url={HorrorMovies} title='Horror' isSmall />
    </div>

  )
}

export default Horror
