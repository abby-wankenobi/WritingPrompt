import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Register from './components/Register'
import {Route, withRouter} from 'react-router-dom'
import Profile from './components/ProfileContainer'
import {getUser, saveAuth, logout} from './actions/auth_actions'
import Login from './components/Login'

class App extends Component {

  componentDidMount(){
    if (localStorage.getItem("token")){
      const auth = JSON.parse(localStorage.auth)
      this.props.saveAuth(auth)
      this.props.history.push('/home')
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <button onClick={()=>{
            this.props.logout()
            this.props.history.push('/login')
          }}>Logout</button>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/home" component={Profile}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {...state.main}
}

export default withRouter(connect(mapStateToProps, {getUser, saveAuth, logout})(App))
