import React from 'react'
import RowPost from '../RowPost/RowPost'
import {RomanceMovies} from '../../urls'

import "./Romance.css"
const Romance = () => {
  return (
     <div className='list'>
          <RowPost url={RomanceMovies} title='Romance' isSmall />   
    </div>


  )
}

export default Romance
