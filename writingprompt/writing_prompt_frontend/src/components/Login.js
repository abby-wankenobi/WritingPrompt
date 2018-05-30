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
    .then(() =>
      {if (localStorage.auth){
        this.props.history.push("/home")
      } else {
        this.props.history.push("/login")
      }}
    )
  }

  render(){
    return(
      <div className="login">
        <form>
          <label>Login</label>
          <br></br>
          <br></br>
          <input className="input"
                 name="username"
                 value={this.state.username}
                 onChange={this.handleChange}
                 placeholder="Username">
               </input>
               <br></br>
           <input className="input"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  placeholder="Password">
                </input>
                <br></br>
                <br></br>
            <button onClick={this.handleSubmit} className="likebutton">Login</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { login })(Login)
