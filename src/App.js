
import './App.css';
import BackToTop from 'react-easy-back-to-top';
// import backToTop from 'reactjs-back-to-top';
import AnimatedCursor from "react-animated-cursor"
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Project from './Component/Pages/Project';
import TechSkill from './Component/Pages/TechSkill';
import Footer from './Component/Pages/Footer';
import {ContactUs}  from './Component/Pages/ContactUs';
import Mynav from './Component/Mynav';
import arrowup from './Component/images/arrowup.svg'

 function App() {
//   let option = {
//     image:arrowup,
//     displayAfterScroll:10, //percentage
//     className:'mytop'
// }
// backToTop.init(option);
  return (
    <>
    <AnimatedCursor 
      innerSize={8}
      outerSize={22}
      color='256,256,256'
      outerAlpha={0.2}
      innerScale={.8}
      outerScale={5}
     
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        
      ]}
    />
    <BackToTop
    
      backgroundColor="black"
      padding="0px 10px 4px 10px"
      position={{ right: "2%", bottom: "2%" }}
      hover={{ backgroundColor: "black",color:"white" }}
      transition="all 0.5s"
      showOnDistance={100}
      borderRadius="100%"
      opacity="1"
      color="black"
      fontSize="30px"
      text="&#128070;"
      // Other Props...
    />
    <Mynav/>
      <Home/>
      <About/>
      <TechSkill/>
      <Project/>
      <ContactUs/>
      <Footer/>
    
    </>
  );
}

export default App;
