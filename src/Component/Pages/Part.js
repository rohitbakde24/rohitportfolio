import React from 'react';
import Particles from 'react-tsparticles';
import ParticlesConfig from './ParticlesConfig.json';
import './Part.css';
const Part = () => {
  return (
    <>

    <Particles className='particles' params={ParticlesConfig}/>
   
        
      
    </>
  )
}

export default Part