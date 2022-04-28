import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './About.css';
import { Container,Row,Col,Button} from 'react-bootstrap';
import { FaGraduationCap } from "react-icons/fa";
import { BiMessageDetail, BiDownload} from "react-icons/bi";
import { AiOutlineLine } from "react-icons/ai";
import { FiDownloadCloud } from "react-icons/fi";
import resume from '../images/resume.pdf'



const About = () => {
 
  return (
    <>
    
     <div className='aboutbg' >
    <div id="section-2" className='pt-5'></div>
    <Container >
      <div>
        <Bounce right >
          <h1 className='pt-5'>👉About Me </h1>
        </Bounce>
        <Bounce bottom >
        <h2 className='py-2'> I am <span className='mycolor'>Rohit Bakde</span></h2>
        <p> I spend my whole day, practically every day, experimenting with HTML, CSS, JavaScript and React. I enjoy building everything from small business sites to rich interactive web app by using react js. if you're looking for a developer to add to your team, I'd love to hear from you! </p>
      
        <Row className='ab-row'>
          
          <Col className='py-2 '>
          <h3 className='pt-3'><span style={{color:"#FFC83D"}}><BiMessageDetail/></span> Personal Detail</h3>
          <tr >
              <td>Name</td>
              <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
              <td><span className='op'>Rohit Bakde</span></td>
            </tr>
            <tr>
              <td>email </td>
              <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
              <td className='op'><a href="mailto: bakderohit123@gmail.com" className='white link'> bakderohit123@gmail.com</a></td>
            </tr>
            <tr>
              <td>Contact no. </td>
              <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
              <td className='op'> +91 9691890908</td>
            </tr>
            <tr>
              <td>Date Of Birth</td>
              <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
              <td className='op'>24 March 2000</td>
            </tr>
          </Col>
          <Col className='py-2'>
          <div >
          <h2><span style={{color:"#FFC83D"}}><FaGraduationCap/> </span>Education</h2>
          <h5 >Bachelor Of Technology </h5>
          <p ><span className='op'>2018 <AiOutlineLine/> 2022</span><br/>
          Computer Science Engineering <br/>
          <span className='op'>Patel College Of Science And Technology, Indore (RGPV) Univercity</span>
          </p>
        </div>
          </Col>
        </Row>
        
        <button className='mybtn mt-5'><a href={resume} target="_blank" className='hire'><b>My Resume <FiDownloadCloud style={{fontSize:20}}/> </b></a></button>
        </Bounce>
      </div>
    
    </Container>
   
    </div>
    </>
  )
}

export default About