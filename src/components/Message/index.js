// Write your code here
import React from 'react'

import './index.css'

const Message = ({isLoggedIn}) => (
  <h1 className="message">{isLoggedIn ? 'Welcome User' : 'Please Login'}</h1>
)

export default Message
