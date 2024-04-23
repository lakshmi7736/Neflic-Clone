import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import RowPost from './Components/RowPost/RowPost'
import {action,orginals,ComedyMovies,HorrorMovies,RomanceMovies} from './urls'

function App() {


  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <RowPost url={orginals} title='Nelfix Orginals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={ComedyMovies} title='Comedy' isSmall />
      <RowPost url={HorrorMovies} title='Horror' isSmall />
      <RowPost url={RomanceMovies} title='Romance' isSmall />   
    </div>
  )
}

export default App

