// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Logout from '../Logout'
import Login from '../Login'
import './index.css'
class Home extends Component {
  state = {isLoggedIn: false}

  toggleLogin = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="home-container">
        <div className="home-card">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout onLogout={this.toggleLogin} />
          ) : (
            <Login onLogin={this.toggleLogin} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
