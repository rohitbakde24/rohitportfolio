import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import todolist from '../images/todolist.png'
import clock from '../images/clock.png'
import cal from '../images/cal.PNG'
import cryptosc from '../images/cryptosc.PNG'
import newsweb from '../images/newsweb.png'
import temp from '../images/temp.png'
import Bounce from 'react-reveal/Bounce';
import { MdDoubleArrow } from "react-icons/md";
import './Project.css'

const Project = () => {

  return (
    <>
      <div className='project-bg'  >
        <div id="section-4" >
        <Container >
        <Bounce right>
        <h1 className='pt-5' >👉Project</h1>
        </Bounce>
        <Bounce bottom>
          <div className=''>
          <Row className='row-gap pt-3'>
            <Col>
            <figure className="snip0016">
            <div className='project-img'>
              <img className="img-responsive pro-img" src={temp} alt=""/>
            </div>  
	            <figcaption>
		            <h2><span>WEATHER</span></h2>
		            <p>The Weather app includes a number of features that provide information about current and forecasted weather</p>
		            <a href="https://github.com/rohitbakde24/weather" target="_blank"><b>View on github <MdDoubleArrow className='view'/></b></a>
	            </figcaption>			
            </figure>
            </Col>
            <Col>
            <figure className="snip0016">
            <div className='project-img'>
              <img className="img-responsive pro-img" src={cryptosc} alt=""/>
            </div>
	            <figcaption>
		            <h2><span>CRYPTO MARKET</span></h2>
		            <p>Build a cryptocurrency app that lists all the available cryptos in the market and the news about crypto.</p>
		            <a href="https://github.com/rohitbakde24/cryptocurrency" target="_blank"><b>View on github <MdDoubleArrow className='view'/></b></a>
	            </figcaption>			
            </figure>
            </Col>
          </Row>
          <Row className='row-gap'>
            <Col >
            <figure className="snip0016">
            <div className='project-img'>
              <img className="img-responsive pro-img" src={cal} alt=""/>
            </div>
	            <figcaption>
		            <h2><span>CALCULATOR</span></h2>
		            <p>Calculator build by React and javascript. There is a input field to show result and the buttons to type input.</p>
		            <a href="https://github.com/rohitbakde24/calculator" target="_blank"><b>View on github <MdDoubleArrow className='view'/></b></a>
	            </figcaption>			
            </figure>
            </Col>
            <Col>
            <figure className="snip0016">
            <div className='project-img'>
              <img className="img-responsive pro-img" src={newsweb} alt=""/>
            </div>
	            <figcaption>
		            <h2><span>NEWS PAGE</span></h2>
		            <p>Build a news feed with React and set up Channels for adding realtime functionality to the feed.You can read news of different categories</p>
		            <a href="https://github.com/rohitbakde24/news" target="_blank"><b>View on github <MdDoubleArrow className='view'/></b></a>
	            </figcaption>			
            </figure>
            </Col>
          </Row>
          <Row className='row-gap' >
            <Col >
            <figure className="snip0016">
              <div className='project-img'>
              <img className="img-responsive pro-img" src={todolist} alt=""/>
              </div>
	            <figcaption>
		            <h2><span>TO DO LIST</span></h2>
		            <p>Type a task or whatever you want into the input field and click on + or press enter. Once you've submitted your item, you will see it appear as an entry.</p>
		            <a href="https://github.com/rohitbakde24/todoapp" target="_blank"><b>View on github <MdDoubleArrow className='view'/></b></a>
	            </figcaption>			
            </figure>
            </Col>
            <Col>
            <figure className="snip0016">
            <div className='project-img'>
              <img className="img-responsive pro-img " src={clock} alt=""/>
            </div>  
	            <figcaption>
		            <h2><span>DIGITAL  CLOCK</span></h2>
		            <p className='showdata'>Digital clock well have 2 digits assigned to hours (24 hours), and 2 digits assigned to minutes (60 minutes), and a flashing LED to represent the seconds.</p>
		            <a href="https://github.com/rohitbakde24/digitalclock" target="_blank"><b>View on github <MdDoubleArrow className='view'/></b></a>
	            </figcaption>			
            </figure>
            </Col>
          </Row>
          </div>
          </Bounce>
        </Container>
  
        </div>
      </div>
    </>
    
  )
}

export default Project