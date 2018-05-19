import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Register from './components/Register'
import {Route, withRouter} from 'react-router-dom'
import HomePage from './components/HomePage'
import {getUser, saveAuth, logout} from './actions/auth_actions'
import Login from './components/Login'
import NavBar from './components/NavBar'

class App extends Component {

  componentDidMount(){
    if (localStorage.getItem("auth")){
      const auth = JSON.parse(localStorage.auth)
      this.props.saveAuth(auth)
      this.props.history.push('/home')
    }
  }

  render() {
    return (
    <div className="App">
      <NavBar history={this.props.history}/>

      <div className="routes">
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/home" component={HomePage}/>
      </div>

    </div>
    );
  }
}

function mapStateToProps(state){
  return {auth: state.auth}
}

export default withRouter(connect(mapStateToProps, {getUser, saveAuth, logout})(App))
