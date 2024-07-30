import React, { useState, useEffect } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components'; 
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../../../../fakeData/fakeData';

export default function Navbar() {
    //state
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    //comportements
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    };
    //affichage
  return (
    <NavbarStyled $scrolled={scrolled} aria-label="Primary Navigation">
        <NavbarContent>
            <Logo to="/" $scrolled={scrolled} aria-label="Home">Innova Tech</Logo>
            <NavLinks $open={menuOpen} aria-label="Navigation Links">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.id}
                        to={link.path}
                        $scrolled={scrolled}
                        onClick={toggleMenu}
                        exact="true"
                        aria-label={link.label}
                    >
                        {link.label}
                    </NavLink>
                ) )}
            </NavLinks>
            <MenuIcon onClick={toggleMenu} $scrolled={scrolled} aria-label="Menu Toggle">
                {menuOpen ? <FaTimes /> : <FaBars />}
            </MenuIcon>
        </NavbarContent>
    </NavbarStyled>
  )
}
const NavbarStyled = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ $scrolled }) => ($scrolled ? '#fff' : 'transparent')};
  transition: background-color 0.3s ease;
  z-index: 1000;
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1200px;
  margin: auto;
`;

const Logo = styled(RouterNavLink)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: ${({ $scrolled }) => ($scrolled ? '#000' : '#fff')};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ $open }) => ($open ? '0' : '-100%')};
    width: 200px;
    height: 100vh;
    background-color: #fff;
    padding-top: 5rem;
    transition: right 0.3s ease;
  }
`;

const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  color: ${({ $scrolled }) => ($scrolled ? '#000' : '#fff')};
  font-size: 1rem;
  transition: color 0.3s ease;
  &:hover {
    color: #007BFF;
  }

  &.active {
    border-bottom: 2px solid #007BFF;
  }

  @media (max-width: 768px) {
    color: #000;
    padding: 1rem;
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    color: ${({ $scrolled }) => ($scrolled ? '#000' : '#fff')};
    cursor: pointer;
  }
`;
