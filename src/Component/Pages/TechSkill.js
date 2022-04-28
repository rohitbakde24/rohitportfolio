import React from 'react'
import Bounce from 'react-reveal/Bounce';
import ProgressBar from 'react-animated-progress-bar';
import { Container, Row,Col } from 'react-bootstrap';
import { GrReactjs} from "react-icons/gr";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript,IoLogoPython } from "react-icons/io5";
import './TechSkill.css'

const TechSkill = () => {
  return (
    <>
    
    <div className='pb progress-bar' >
      <div  id="section-3">   
      <Container >
     
      
        <Bounce right>
          <h1 className='skills mt-5'>👉Skills</h1>
        </Bounce>
       
        <Bounce bottom>
          <Row className='center-progress pt-3'>
            <Col >
              <div className='mob-margin'>
               <ProgressBar width="250" trackWidth="20" percentage="60" defColor={{
                fair: '#EAB737',
                good: '#EAB737',
                excellent: '#EAB737',
                poor: '#EAB737',
                }}/>
                <p className='text'><span style={{color:"#61DBFB"}}><GrReactjs/> </span> React.js</p>
              </div> 
            </Col>
            <Col>
              <div>
                <ProgressBar width="250" trackWidth="20" percentage="90" defColor={{
                fair: '#EAB737',
                good: '#EAB737',
                excellent: '#EAB737',
                poor: '#EAB737',
                }}/>
                <p className='text'><span style={{color:"#f06529"}}><AiFillHtml5/> </span> HTML</p>
              </div>
            </Col>
            <Col>
              <div>
                <ProgressBar width="250" trackWidth="20" percentage="70" defColor={{
                fair: '#EAB737',
                good: '#EAB737',
                excellent: '#EAB737',
                poor: '#EAB737',
                }}/>
                <p className='text'><span style={{color:"#2965f1"}}><DiCss3/> </span> CSS</p>
              </div> 
            </Col>
            <Col>
              <div>
                <ProgressBar width="250" trackWidth="20" percentage="80" defColor={{
                fair: '#EAB737',
                good: '#EAB737',
                excellent: '#EAB737',
                poor: '#EAB737',
                }}/>
                <p className='text'><span style={{color:"#563d7c"}}><FaBootstrap/> </span> Bootstrap</p>
              </div>
            </Col>
          </Row>
      
          <Row className='second-row'>
            <Col>
              <div>
                <ProgressBar width="250" trackWidth="20" percentage="60" defColor={{
                fair: '#EAB737',
                good: '#EAB737',
                excellent: '#EAB737',
                poor: '#EAB737',
                }}/>
                <p className='javascript-text'><span style={{color:"#F0DB4F"}}><IoLogoJavascript/> </span> Javascript</p>
              </div>
            </Col>
            <Col>
              <div>
                <ProgressBar width="250" trackWidth="20" percentage="40" defColor={{
                fair: '#EAB737',
                good: '#EAB737',
                excellent: '#EAB737',
                poor: '#EAB737',
                }}/>
                <p className='python-text'><span style={{color:"#4B8BBE"}}><IoLogoPython/> </span>Python</p>
              </div>
            </Col>
          </Row>
          </Bounce>
        </Container>
      </div>
    </div>

    </>
  )
}

export default TechSkill