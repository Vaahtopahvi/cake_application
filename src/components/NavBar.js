import React from 'react'
import {GiKnifeFork } from 'react-icons/gi'
import styled from "styled-components";
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav className='nav'>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Ilonamakarona</Logo>
          <div className='links'>
            <Toivo to={"/toive"}>Toivo reseptiä</Toivo> 
          </div>
        </Nav>
        
    </nav>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`
const Toivo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two';
  margin-left: 780px;
  display:flex
  
`
const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  svg{
    font-size: 2rem;
  }
`

export default NavBar