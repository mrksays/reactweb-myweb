import React, {useEffect, useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll/modules';
import Logo from '../../assets/logo.svg'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavImg,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrolNav, setScrolNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrolNav(true)
    } else{
      setScrolNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll' , changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
    <IconContext.Provider value={{color : '#fff'}}>
      <Nav scrolNav={scrolNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            <NavImg src={Logo} alt={Logo}/>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about' smooth={true} duration={2000} spy={true} exact='true' offset={-80} >Explore</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover' smooth={true} duration={2000} spy={true} exact='true' offset={-80} >Learn</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services' smooth={true} duration={2000} spy={true} exact='true' offset={-80} >Verify</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact' smooth={true} duration={3000} spy={true} exact='true' offset={-80} >Meet Us</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Contribute</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
