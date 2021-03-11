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
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
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
  const [dropdownOpenService, setDropdownOpenService] = useState(false);
  const [dropdownOpenAbout, setDropdownOpenAbout] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleService = () => setDropdownOpenService(!dropdownOpenService);
  const toggleAbout = () => setDropdownOpenAbout(!dropdownOpenAbout);

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
              <NavLink href="/" active>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#customers">Global Markets</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#products">Products</NavLink>
            </NavItem>
            <Dropdown nav isOpen={dropdownOpenService} onClick={toggleService}>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/">Our Services</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/">Pre-Clinical</DropdownItem>
                <DropdownItem href="/">3 Phase Support</DropdownItem>
                <DropdownItem href="/">Commercialization Strategy Support</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown nav isOpen={dropdownOpenAbout} onClick={toggleAbout}>
              <DropdownToggle nav caret>
                About
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="#about">About Us</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/">Our Capabilities</DropdownItem>
                <DropdownItem href="/">Our Commitment</DropdownItem>
                <DropdownItem href="/">The Team</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink href="/">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Menu>
  )
}