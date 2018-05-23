import React from 'react';
import { connect } from 'react-redux'
import { setAuth } from '../actions/auth_actions'

class Register extends React.Component {

  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
    bio: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.password === this.state.passwordConfirmation){
      this.props.setAuth(this.state.username, this.state.password, this.state.bio)
      .then(() => this.props.history.push("/home"))
    } else {
      alert("Nope")
    }
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   fetch('http://localhost:3000/users', {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       username: this.state.username,
  //       password: this.state.password
  //     })
  //   })
  //   .then(r => r.json())
  //   .then(user => {
  //     localStorage.auth = JSON.stringify(user)
  //     this.props.setAuth(user)
  //   })
  // }

  render(){
    return(
      <div>
        <form onChange={this.handleChange}>
          <label>Register</label>
          <br></br>
          <input value={this.state.username} name="username" placeholder="Username" />
          <br></br>
          <input type="password" value={this.state.password} name="password" placeholder="password" />
          <br></br>
          <input type="password" value={this.state.passwordConfirmation} name="passwordConfirmation" placeholder="Confirm password"/>
          <br></br>
          <textarea value={this.state.bio} name="bio" placeholder="Bio"/>
          <br></br>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}


export default connect(null, { setAuth })(Register)
