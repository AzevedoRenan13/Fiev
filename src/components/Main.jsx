import React from 'react'
import videoBg from '../assets/VIDEO.mp4';
import Logo from '../assets/LogoFiev.png'

const Main = () => {
  return (
    <div className='section_navbar'>
      <video src={videoBg} autoPlay loop muted /> {videoBg}
      <div className='navbar'>
      <a href="#" className='Logo'>
          <img src={Logo} alt='Logo' />
        </a>
        <ul className='nav_menu'>
         <li className='nav__item'><a href="#" className='nav__link'>Home</a> </li>
         <li className='nav__item'><a href="#" className='nav__link'>Produtos</a></li>
         <li className='nav__item'><a href="#" className='nav__link'>Sobre nós</a></li>
         <li className='nav__item'><a href="#" className='nav__link'>Login</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Main