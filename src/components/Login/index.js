// Write your code here
import React from 'react'

import './index.css'

const Login = ({onLogin}) => (
  <button type="button" className="login-btn" onClick={onLogin}>
    Login
  </button>
)

export default Login
