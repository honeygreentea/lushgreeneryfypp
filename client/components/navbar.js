import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import 'semantic-ui-css/semantic.min.css'
import {
  Button,
  Menu,
} from 'semantic-ui-react'


    
// <Menu.Item as='a'>
// <Link to="/profile" className= "nav-link">Profile 
// </Link>
// </Menu.Item>
function Navbar() {

  return (
    <>
<Menu>
    <Menu.Item as='a'>LushgreeneryMasterAdmin
    </Menu.Item>

    <Menu.Item as='a'>
    <Link to="/advisors" className= "nav-link">Advisors
    </Link>
    </Menu.Item>

    <Menu.Item as='a'>
    <Link to="/managepolicies" className= "nav-link">Manage Policies
    </Link>
    </Menu.Item>

    <Menu.Item as='a'>
    <Link to="/newpolicy" className= "nav-link">New Policy
    </Link>
    </Menu.Item>
    
    <Menu.Item as='a'>
    <Link to="/register" className= "nav-link">Register 
    </Link>
    </Menu.Item>

  
    <Menu.Item position='right'>
    <Button as='a'>Log Out</Button>
    </Menu.Item>

  </Menu>
    </>
  )
}

export default Navbar;
