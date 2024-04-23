import React from 'react'
import "./Navbar.css"
import {useNavigate } from 'react-router-dom';




const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='Navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Neflix Logo" />
    
      {/* routing using links */}

      {/* <div className="nav-links">
        <Router>
        <Link to='/' className="nav-link" >Home</Link>
        <Link to='/action' className="nav-link" >Action</Link>
        <Link to='/comedy' className="nav-link" >Comedy</Link>
        <Link to='/horror' className="nav-link" >Horror</Link>
          <Routes>
            <Route Component={Action} path='/action'/>
            <Route Component={Comedy}  path='/comedy'/>
            <Route Component={Horror}  path='/horror'/>
          </Routes>
        </Router>
      </div> */}


      {/* routing using useNavigate() */}

      <div className="nav-links">
       <button onClick={()=>navigate('/')}  className="nav-link" >Home</button>
        <button onClick={()=>navigate('/action')}  className="nav-link" >Action</button>
        <button onClick={()=>navigate('/comedy')} className="nav-link" >Comedy</button>
        <button onClick={()=>navigate('/romance')}  className="nav-link" >Romance</button>
        <button onClick={()=>navigate('/horror')}  className="nav-link" >Horror</button>
      </div>
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
 
    </div>
  )
}

export default Navbar
