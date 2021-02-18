import React, { useState } from "react"
import styled from "styled-components"

import Logo from "./logo"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.css'
import "./navbar.scss"

const Menu = styled.div`
  margin-bottom: 10px;
  justify-content: space-between;
  display: flex;
`

export default function Navigation () {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Menu>
      <NavbarBrand href="/">
          <Logo />
      </NavbarBrand>
      <Navbar 
        expand="md"
        className="links-right"
        color="light" 
        light
      >
        <NavbarToggler onClick={toggle} />
        <Collapse 
          isOpen={isOpen}
          navbar
        >
          <Nav
            className="justify-content-end"
            navbar
          >
            <NavItem>
              <NavLink href="#pitch">Why Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#customers">Global Markets</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#products">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Menu>
  )
}