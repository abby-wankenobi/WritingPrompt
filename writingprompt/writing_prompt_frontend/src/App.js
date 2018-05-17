import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Register from './components/Register'
import {Route, withRouter} from 'react-router-dom'
import Profile from './components/ProfileContainer'
import {getUser} from './actions/auth_actions'

class App extends Component {

  componentDidMount(){
    if (localStorage.getItem("token")){
      this.props.getUser()
      .then(() => {
        this.props.history.push('/home')
      })
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Route path="/register" component={Register}/>
        <Route path="/home" component={Profile}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {...state.main}
}

export default withRouter(connect(mapStateToProps, {getUser})(App))
