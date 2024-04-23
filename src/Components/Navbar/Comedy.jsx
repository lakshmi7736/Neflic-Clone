import React from 'react'
import RowPost from '../RowPost/RowPost'
import {ComedyMovies} from '../../urls'
import "./Comedy.css"
const Comedy = () => {
  return (

    <div className='list'>
        <RowPost url={ComedyMovies} title='Comedy' isSmall />
    </div>

  )
}

export default Comedy
