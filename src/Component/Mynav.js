import React from "react"
import { Nav,Navbar, Container } from "react-bootstrap"
import Scrollspy from 'react-scrollspy'
import logoRb from './images/logoRb.png'
import './Mynav.css'

const Mynav = () =>{
    return(
        <>
        <Navbar variant="dark" expand="lg" fixed="top" className="nav-bg">
  <Container>
    <Navbar.Brand href="https://www.linkedin.com/in/rohit-bakde-48245b202" target="_blank" className="icon"><img src={logoRb} style={{width:70}}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
    <Scrollspy 
        items={ ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'] } 
        currentClassName="isCurrent">
        <a className="links" href="#section-1" ><b>HOME</b></a>
        <a className="links"  href="#section-2" ><b>ABOUT</b></a>
        <a className="links" href="#section-3" ><b>SKILLS</b></a>
        <a className="links" href="#section-4" ><b>PROJECT</b></a>
        <a className="links" href="#section-5" ><b>CONTACT</b></a>
      </Scrollspy>
      </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar>

        </>
    )
}
export default Mynav