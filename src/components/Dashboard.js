import React from 'react'
import Login from './Login'

const Dashboard = () => {
  return (
    <div className="align-items-center row container">
      <Login/>
      <div className="col-md-8 text-left">
        <img className="right-img" alt='dashboard' src="http://wpbusinesssolution.com/banner.png" />
      </div>
    </div>
  )
}

export default Dashboard