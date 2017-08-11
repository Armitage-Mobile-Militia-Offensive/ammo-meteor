import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className="d-flex align-items-center" style={{
      backgroundImage: 'url("/assets/ScreenShot0148.jpg")',
      height: '100vh',
      width: '100vw',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="container">
          <div className="text-center" style={{ fontFamily: 'Electrolize', color: 'white'}}>Armitage Mobile Militia Offensive</div>
          <div className="text-center display-1" style={{ fontFamily: 'Electrolize', marginBottom: '0%', color: '#F59B45'}}><b> A . M . M . O . </b></div>
          <div className="text-center text-muted" style={{ fontFamily: 'Offside', color: 'white'}}><small>ex oblivione, unitas</small></div>
       </div>
    </div>
  )
}

export default Home
