// Write your code here
import React from 'react'

import './index.css'

const Logout = ({onLogout}) => (
  <button type="button" className="logout-btn" onClick={onLogout}>
    Logout
  </button>
)

export default Logout
