import React from 'react';
import Part from './Part';
import './Home.scss';
import myimg from '../images/myimg.png';
import { Col, Container, Row } from 'react-bootstrap';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Bounce from 'react-reveal/Bounce';


const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Web Designer", "Freelancer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop:true,
      smartBackspace: true,
      
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (<>
      
      <div id="section-1">
      <Container >
        <Row className='front'>
          <Col>
          <div className='myname'>
            <Bounce top>
            <h3 className='color'><b> Hi, I'm Rohit </b></h3>
            <h1 className='type'><span ref={el}></span></h1>
            <p>I'm a Web Developer with extensive in react js.</p>
            <button className='mybtn mt-2'><b><a href="#section-5" className='hire'>Hire me</a></b></button>
            </Bounce>
            </div> 
            
          </Col>
          <Col>
         <div className='bottom'>
              <img src={myimg} className="rohit"/>
              
            </div> 
          </Col>
        </Row>
        <Part/>
      </Container>
      </div>
    </>
  )
}

export default Home