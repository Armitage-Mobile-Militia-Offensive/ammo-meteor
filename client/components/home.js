import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className="d-flex align-items-center" id="homeLanding">
      <div className="col-sm-8 offset-sm-2" >
        <h3 className="landingHeader" style={{ fontFamily: 'Electrolize', textAlign: 'center', color: 'white'}}>Armitage Mobile Militia Offensive</h3>
        <h1 className="landingHeader display-1" style={{ fontFamily: 'Electrolize', marginBottom: '0%', color: '#F59B45'}}><b> A . M . M . O . </b></h1>
        <p className="landingText lead" style={{ fontFamily: 'Offside', textAlign: 'center'}}><small>ex oblivione, unitas</small></p>
      </div>
    </div>
  )
}

export default Home
