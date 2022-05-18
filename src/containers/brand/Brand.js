import React from 'react'
import './brand.css'
import { dropbox, google, slack, shopify, atlassian } from './imports'

const Brand = () => {
  return (
    <div className='template__brand section__padding' id="brand">
      <div><img src={dropbox} alt="dropbox"/></div>
      <div><img src={google} alt="google"/></div>
      <div><img src={slack} alt="slack"/></div>
      <div><img src={shopify} alt="shopify"/></div>
      <div><img src={atlassian} alt="atlassian"/></div>
    </div>
  )
}

export default Brand
