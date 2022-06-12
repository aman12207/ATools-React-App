import React from 'react'
import Login from './Login'
import Image from '../images/dashboard-img.png'

const Dashboard = () => {
  return (
    <div className="align-items-center row container">
      <Login/>
      <div className="col-md-8 text-left">
        <img className="right-img" alt='dashboard' src={Image} />
      </div>
    </div>
  )
}

export default Dashboard