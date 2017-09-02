import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className ="d-flex" style={{
      backgroundImage: 'url("/assets/ScreenShot0148.jpg',
      height: '100vh',
      width: '100vw',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="d-flex align-items-center justify-content-center" >
        <div className="row">
              <div className="text-center mw-100" style={{ fontFamily: 'Electrolize', color: 'white'}}>Armitage Mobile Militia Offensive</div>
              <div className="text-center display-1 mw-100" style={{ fontSize: '5rem', fontFamily: 'Electrolize', marginBottom: '0%', color: '#F59B45'}}><b> A . M . M . O . </b></div>
              <div className="text-center text-muted mw-100" style={{ fontFamily: 'Offside', color: 'white'}}><small>ex oblivione, unitas</small></div>
        </div>
      </div>
      <div className="d-flex align-items-end justify-content-center" style={{color: 'white', fontFamily: 'Electrolize'}}>Join our discord to data at <a style={{color: '#F59B45'}} className="nav-text" href="https://discord.gg/pgJs3u6">here</a> or our RSI page at <a style={{color: '#F59B45'}} className="nav-text" href="https://robertsspaceindustries.com/orgs/AMMO">{'https://robertsspaceindustries.com/orgs/AMMO'}</a></div>
    </div>
  )
}

export default Home
