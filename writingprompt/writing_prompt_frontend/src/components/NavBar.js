import React from 'react';
import { connect } from 'react-redux'
import {getUser, saveAuth, logout} from '../actions/auth_actions'
import {getUserInfo} from '../actions/content_actions'

class NavBar extends React.Component{

  render(){
    return (
      <div className="navbar-stuff">
        <nav id="navbar">
          <div className="nav-wrapper">
            <div className="logo">
              <a onClick={() => this.props.history.push('/home')}><i className="fas fa-chess-knight"></i>UNTITLED</a>
            </div>

            <ul id="menu">
              <li><a onClick={() => this.props.history.push('/home')}>Home</a></li>
              {
                this.props.auth ?
                <li><a onClick={() => this.props.history.push('/prompts')}>Prompts</a></li> :
                null
              }
              {
                this.props.auth ?
                <li><a onClick={() => this.props.history.push('/stories')}>Stories</a></li> :
                null
              }
              {
                this.props.auth ?
                <li><a onClick={() => {
                    this.props.history.push(`/users/${this.props.auth.user_id}`)
                    this.props.getUserInfo(this.props.auth.user_id)
                    }}>Profile</a></li> :
                null
              }
              {
                !this.props.auth ?
                <li><a onClick={() => this.props.history.push('/login')}>Login</a></li> :
                null
              }
              {
                !this.props.auth ?
                <li><a onClick={() => this.props.history.push('/register')}>Register</a></li> :
                null
              }
              {
                this.props.auth ?
                <li><a onClick={()=>{
                    this.props.logout()
                    this.props.history.push('/home')
                  }}>Logout</a></li> :
                null
              }
            </ul>
          </div>
        </nav>


        <div className="menuIcon">
          <span className="icon icon-bars"></span>
          <span className="icon icon-bars overlay"></span>
        </div>


        <div className="overlay-menu">
          <ul id="menu">
            <li><a onClick={() => this.props.history.push('/home')}>Home</a></li>
            {
              this.props.auth ?
              <li><a onClick={() => this.props.history.push('/prompts')}>Prompts</a></li> :
              null
            }
            {
              this.props.auth ?
              <li><a onClick={() => this.props.history.push('/stories')}>Stories</a></li> :
              null
            }
            {
              this.props.auth ?
              <li><a onClick={() => this.props.history.push('/home')}>Profile</a></li> :
              null
            }
            {
              !this.props.auth ?
              <li><a onClick={() => this.props.history.push('/login')}>Login</a></li> :
              null
            }
            {
              !this.props.auth ?
              <li><a onClick={() => this.props.history.push('/register')}>Register</a></li> :
              null
            }
            {
              this.props.auth ?
              <li><a onClick={()=>{
                  this.props.logout()
                  this.props.history.push('/login')
                }}>Logout</a></li> :
              null
            }
          </ul>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state){
  return {auth: state.mainReducer.auth}
}

export default connect(mapStateToProps, {getUser, saveAuth, logout, getUserInfo})(NavBar)
