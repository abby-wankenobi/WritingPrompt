import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/auth_actions'

class Login extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state.username, this.state.password)
    .then(() => this.props.history.push("/home"))
  }

  render(){
    return(
      <div>
        <form>
          <label>Login</label>
          <input name="username"
                 value={this.state.username}
                 onChange={this.handleChange}
                 placeholder="Username">
               </input>
           <input type="password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  placeholder="Password">
                </input>
            <button onClick={this.handleSubmit}>Login</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { login })(Login)
