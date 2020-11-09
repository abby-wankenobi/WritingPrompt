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
      .then(() => this.props.history.push("/"))
    } else {
      alert("Nope")
    }
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   fetch('https://wp-backend.herokuapp.com/users', {
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
      <div className="register">
        <form onChange={this.handleChange}>
          <label>Register</label>
          <input className="input" value={this.state.username} name="username" placeholder="Username" />
          <input className="input" type="password" value={this.state.password} name="password" placeholder="Password" />
          <input className="input" type="password" value={this.state.passwordConfirmation} name="passwordConfirmation" placeholder="Confirm password"/>
          <textarea rows="10" cols="13" className="textfield" value={this.state.bio} name="bio" placeholder="Bio"/>
          <button className="likebutton" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}


export default connect(null, { setAuth })(Register)
