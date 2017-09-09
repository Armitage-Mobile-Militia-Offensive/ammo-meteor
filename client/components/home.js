import React, {Component} from 'react'

// import './home.css'

export default class Home extends Component{
  componentWillMount(){
    document.body.style.backgroundImage = 'url("./assets/ScreenShot0148.jpg")'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = 'center'
  }
  componentWillUnmount(){
    document.body.style.backgroundImage = ''
    document.body.style.backgroundRepeat = ''
    document.body.style.backgroundSize = ''
    document.body.style.backgroundPosition = ''
  }
  render(){
    return (
      <div className="d-flex" style={{
        height: '100vh'
      }}>
        <div className="align-self-center" style={{width: '100vw'}}>
                <div className="text-center" style={{ fontFamily: 'Electrolize', color: 'white'}}>
                  Armitage Mobile Militia Offensive
                </div>
                <div className="text-center display-1" style={{ fontSize: '5rem', fontFamily: 'Electrolize', marginBottom: '0%', color: '#F59B45'}}>
                  <b> A . M . M . O . </b>
                </div>
                <div className="text-center text-muted" style={{ fontFamily: 'Offside', color: 'white'}}>
                  <small>ex oblivione, unitas</small>
                </div>
        </div>
        <br/>
        <div className="fixed-bottom text-center" style={{color: 'white', fontFamily: 'Electrolize', width: '100vw'}}>Join our discord
          <a style={{color: '#F59B45', paddingLeft: '5px', paddingRight: '5px'}} className="nav-text" href="https://discord.gg/pgJs3u6">
            here
          </a>
          or our RSI page at
          <a style={{color: '#F59B45', paddingLeft: '5px'}} className="nav-text" href="https://robertsspaceindustries.com/orgs/AMMO">
           {'https://robertsspaceindustries.com/orgs/AMMO'}
          </a>
        </div>
      </div>
    )
  }
}
