import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'
export default function Player({spotify}) {
  return (
    <div className='player' style={{ display:'flex', flexDirection: 'column'}}>
      <div className="player__body" style={{display: 'flex',flexGrow:1}}>
        <Sidebar/>
        <Body/>
        <Footer/>
      </div>
    </div>
  )
}
