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
import ProfilePage from './components/ProfilePageComponents/ProfilePage'
import NewStory from './components/ProfilePageComponents/NewStory'
import ShowStory from './components/ProfilePageComponents/ShowStory'
import UpdateStory from './components/ProfilePageComponents/UpdateStory'
import NewPrompt from './components/ProfilePageComponents/NewPrompt'
import ShowPrompt from './components/ProfilePageComponents/ShowPrompt'
import UpdatePrompt from './components/ProfilePageComponents/UpdatePrompt'


class App extends Component {

  componentWillMount(){
    if (localStorage.getItem("auth")){
      const auth = JSON.parse(localStorage.auth)
      this.props.saveAuth(auth)
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
        <Route path="/users/:id" component={ProfilePage} />
        <Route path="/newstory" component={NewStory} />
        <Route exact path="/stories/:id" component={ShowStory} />
        <Route path="/stories/:id/edit" component={UpdateStory} />
        <Route path="/newprompt" component={NewPrompt} />
        <Route exact path="/prompts/:id" component={ShowPrompt} />
        <Route path="/prompts/:id/edit" component={UpdatePrompt} />
      </div>

    </div>
    );
  }
}

function mapStateToProps(state){
  return {auth: state.auth}
}

export default withRouter(connect(mapStateToProps, {getUser, saveAuth, logout})(App))
