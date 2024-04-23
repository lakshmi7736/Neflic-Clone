import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import RowPost from './Components/RowPost/RowPost'
import {action,orginals,ComedyMovies,HorrorMovies,RomanceMovies} from './urls'
import Action from './Components/Navbar/Action'
import Comedy from './Components/Navbar/Comedy'
import Romance from './Components/Navbar/Romance'
import Horror from './Components/Navbar/Horror'


function App() {


  return (
    <div className='App'>
        <Navbar />
         <Routes>
           <Route Component={Action} path='/action'/>
            <Route Component={Comedy}  path='/comedy'/>
            <Route Component={Romance}  path='/romance'/>
            <Route Component={Horror}  path='/horror'/>
               {/* Default route */}
            <Route path='/' element={
              <>
                <Banner />
                <RowPost url={orginals} title='Nelfix Orginals' />
                <RowPost url={action} title='Action' isSmall />
                <RowPost url={ComedyMovies} title='Comedy' isSmall />
                <RowPost url={HorrorMovies} title='Horror' isSmall />
                <RowPost url={RomanceMovies} title='Romance' isSmall />
              </>
            } />
         </Routes>

    </div>
  )
}

export default App

