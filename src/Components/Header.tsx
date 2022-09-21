import React from 'react';
import Headerlogo from '../Elements/Headerlogo';
import Navbar from '../Elements/Navbar';
function Header() {
  return (
    <header className='Header-component'>
        <Headerlogo />
        <Navbar />
    </header>
  )
}

export default Header