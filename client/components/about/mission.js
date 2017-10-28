import React from 'react';

const Mission = () => {
  document.body.style.backgroundSize = 'cover'
  return (
    <div className="" style={{color: 'white', backgroundColor: 'rgba(0,0,0,.5)', backgroundBlendMode: 'multiply', boxShadow: '0 0 8px 8px rgba(0,0,0,.25)'}}>
      <h1>Who we are:</h1>
      <p style={{fontSize: '125%' }}>We are a collection of individuals from all corners of human space and proffessions. Collectively we consider ourselves a PMC (Private Miltiary Corperation) however we have members in disciplines outside pure combat.</p>
      <h1>Home system:</h1>
      <p style={{fontSize: '125%' }}>Orion - Armitage <b className="h3" style={{fontVariant: 'small-caps', color: '#F59B45'}}>[Fallen]</b></p>
      <p style={{fontSize: '125%' }}>Rally <span style={{fontVariant: 'small-caps', color: '#F59B45'}}>[FarStar]</span> - FarStar I <b className="h3" style={{fontVariant: 'small-caps', color: '#F59B45'}}>[Active]</b></p>

      <h1>Primary Objective</h1>
      <p style={{fontSize: '125%' }}>Protect our own</p>

      <h1>Secondary Objective</h1>
      <p style={{fontSize: '125%' }}>Reclaim our system</p>
    </div>
  );
};

export default Mission;
