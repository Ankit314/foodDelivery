import React from 'react'
import './Navebar.css'
import { assets } from '../../assets/admin_assets/assets'

const Navebar = () => {
  return (
    <div>
      <div className="navbar">
        <img className='logo' src={assets.logo} alt="" />
        <img className='profile' src={assets.profile_image} alt="" />
      </div>
    </div>
  )
}

export default Navebar