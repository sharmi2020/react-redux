import React from 'react'
import './Logout.css';
const Logout = () => {
  return (
    <div className='logout'>
        <h1>
            Welcome<span className="user-name">sharmi</span>
            <button className="logout_button">Logout</button>
        </h1>
    </div>
  )
}

export default Logout