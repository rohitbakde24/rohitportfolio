import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsFacebook,BsInstagram,BsLinkedin,BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import './ContactUs.css'
import { Container,Row,Col, Form } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';

export const ContactUs = () => {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_oo04cdb', 'template_vyf2d4h', form.current, 'U1BlYiph6AQAvnpSN')
      .then((result) => {
          console.log(result.text);
          alert("Your message has sent successfully")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          alert("error")
      });
  }

  
  return (
    <>
      <div className='contact-bg' >
        <div id="section-5" className='pt-5'></div>
      <Container >
      <Bounce right>
        <h1 className='pt-5'>👉Contact Me </h1>
        </Bounce>
        <Bounce bottom>
        <Row className=' pt-4'>
          <Col className='px-5'>
          
          <Form ref={form} onSubmit={sendEmail} >
            <Form.Control type="text" name="user_name" placeholder='Enter your name'/>
            <Form.Control type="email" name="user_email" placeholder='abc@gmail.com' className='mt-4 myinput'/>
            <Form.Control as="textarea" required placeholder=' Drop a Message...' style={{height: '150px'}} name="message" className='mt-4 myinput'/>
            <button type="submit" value="Send" className='mybtn mt-5 myinput'><b>submit</b></button>
          </Form>
        
          </Col>
          <Col className='contact-detail'>
            <tr>
              <td>Name</td>
              <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
              <td>Rohit Bakde</td>
            </tr>
            <tr>
              <td>Contact no. </td>
              <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
              <td> +91 9691890908</td>
            </tr>
            <tr>
              <td>Email </td>
              <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
              <td><a href="mailto: bakderohit123@gmail.com" className='white link'> bakderohit123@gmail.com</a></td>
            </tr>
            
            <h4 className='social-media'><a href='https://www.linkedin.com/in/rohit-bakde-48245b202' className='myicon link' target="_blank"><BsLinkedin/></a> <a href='https://github.com/rohitbakde24' className='myicon link'target="_blank"><BsGithub/></a> <a href='https://www.facebook.com/rohit.bakde.50' target="_blank" className='myicon link'><BsFacebook/></a> <a href="mailto: bakderohit123@gmail.com" className='myicon link' target="_blank"><FiMail/></a>  <a href='https://www.instagram.com/roh_hit_24' className='myicon link' target="_blank"><BsInstagram/></a></h4>
          </Col>
        </Row>
        </Bounce>
      </Container>
      </div>
    </>
    
  );
};