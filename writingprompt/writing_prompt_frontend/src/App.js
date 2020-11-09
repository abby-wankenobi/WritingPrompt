import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Register from './components/Register'
import {Route, withRouter} from 'react-router-dom'
import HomePage from './components/HomePage'
import {getUser, saveAuth, logout} from './actions/auth_actions'
import { getLikes } from './actions/content_actions'
import Login from './components/Login'
import NavBar from './components/NavBar'
import ProfilePage from './components/ProfilePageComponents/ProfilePage'
import NewStory from './components/ProfilePageComponents/NewStory'
import ShowStory from './components/ProfilePageComponents/ShowStory'
import UpdateStory from './components/ProfilePageComponents/UpdateStory'
import NewPrompt from './components/ProfilePageComponents/NewPrompt'
import ShowPrompt from './components/ProfilePageComponents/ShowPrompt'
import UpdatePrompt from './components/ProfilePageComponents/UpdatePrompt'
import PromptsPage from './components/PromptsPage'
import StoriesPage from './components/StoriesPage'

class App extends Component {

  componentWillMount(){
    if (localStorage.getItem("auth")){
      const auth = JSON.parse(localStorage.auth)
      this.props.saveAuth(auth)
      this.props.getLikes(auth)
    }
  }

  render() {
    return (
    <div className="App">
      <NavBar history={this.props.history}/>
      <div className="content-container">
          <div className="routes">
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route exact path="/" component={HomePage}/>
            <Route path="/users/:id" component={ProfilePage} />
            <Route path="/newstory" component={NewStory} />
            <Route exact path="/stories/:id" component={ShowStory} />
            <Route path="/stories/:id/edit" component={UpdateStory} />
            <Route path="/newprompt" component={NewPrompt} />
            <Route exact path="/prompts/:id" component={ShowPrompt} />
            <Route path="/prompts/:id/edit" component={UpdatePrompt} />
            <Route exact path="/prompts" component={PromptsPage} />
            <Route exact path="/stories" component={StoriesPage} />
          </div>
          <div className="Footer">
            <a href="http://www.abigailswarth.com/" target="_blank"><img src="me.png" alt="portfolio" height="28px" /></a>
            <a href="https://github.com/abby-wankenobi" target="_blank"><img src="github.png" alt="github" height="28px" /></a>
            <a href="https://www.instagram.com/abbywan.kenobi/" target="_blank"><img src="instagram.png" alt="instagram" height="28px" /></a>
            <a href="https://www.linkedin.com/in/abigailswarth/" target="_blank"><img src="linkedin.png" alt="linkedin" height="28px" /></a>
            <a href="https://www.pinterest.com/abigailswarth/" target="_blank"><img src="pinterest.png" alt="pinterest" height="28px" /></a>
          </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state){
  return {auth: state.auth}
}

export default withRouter(connect(mapStateToProps, {getUser, saveAuth, logout, getLikes})(App))
