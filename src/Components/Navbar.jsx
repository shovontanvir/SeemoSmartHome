import React from 'react';
import '../Styles/Navbar.css';

function Navbar() {
  return (
      <section className='bg-info'>
        <div className='container'>
            <div className='navbar d-flex justify-content-between align-items-center'>
                <div className='ml-5'>
                    <img src='https://www.seemobd.com/assets/img/logo_top.png' alt='logo' />
                </div>
                <div className='mr-5'>
                <a href='/home' className='text-cyan-800'>Home</a>
                <a href='/about' className='text-cyan-800'>About</a>
                <a href='/profile' className='text-cyan-800'>Profile</a>
                <a href='/contact' className='text-cyan-800'>Contact</a>
                </div>
            </div>
        </div>
      </section>
  );
}

export default Navbar;
