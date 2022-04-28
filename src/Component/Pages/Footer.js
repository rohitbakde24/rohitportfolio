import React from 'react';
import { Container } from 'react-bootstrap';
import { BsFacebook,BsInstagram,BsLinkedin,BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import './Footer.css';

const Footer = () => {
  return (
    <>
    <Container fluid className='footer-bg white'>
        <div>&#169; 2022. Powerded by <a href="mailto: bakderohit123@gmail.com" className='white link' target="_blank">Rohit Bakde</a> | <a href='https://www.linkedin.com/in/rohit-bakde-48245b202' className='white link' target="_blank"><BsLinkedin/></a> <a href='https://github.com/rohitbakde24' className='white link'target="_blank"><BsGithub/></a> <a href='https://www.facebook.com/rohit.bakde.50' className='white link' target="_blank"><BsFacebook/></a> <a href="mailto: bakderohit123@gmail.com" className='white link' target="_blank"><FiMail/></a>  <a href='https://www.instagram.com/roh_hit_24' className='white link' target="_blank"><BsInstagram/></a>  </div>
    </Container>
    </>
  )
}

export default Footer