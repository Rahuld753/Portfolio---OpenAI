import React from 'react'
import './possibility.css'
import possibility from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='template__possibility section__padding'>
      <div className='template__possibility-image'>
        <img src={possibility} alt="possibility" />
      </div>
      <div className='template__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h3 className='gradient__text'>The possibilities are beyond your imagination</h3>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
