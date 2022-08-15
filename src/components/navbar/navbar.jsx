import React from 'react'
import "./navbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbarWrapper'>
        <div className='topleft'>
          <span className='logo'>Dashboard</span>
        </div>
        <div className='topright'>
        <div className="navbarIcon">
            <SearchOutlinedIcon/>
          </div>
          <img src="/img/flag.jpg" alt='' className='navbarFlag'/>
          <div className="navbarIcon">
          <GridViewIcon/>
          </div>
          <div className="navbarIcon">
            <NotificationsNoneIcon/>
            <span className='topiconBadge'>2</span>
          </div>
          <div className="navbarIcon">
          <SettingsOutlinedIcon/>
          </div>
          <img src='/img/pp1.jpg' alt='' className="navbarprofilepic"/>

          
          
        </div>
      </div>
    </div>
  )
}

export default Navbar