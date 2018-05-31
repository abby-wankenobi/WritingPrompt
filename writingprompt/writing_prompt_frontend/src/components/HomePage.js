import React from 'react';
import { connect } from 'react-redux'
import {getUser, saveAuth, logout} from '../actions/auth_actions'
import typewriteredit from './images/typewriteredit.jpg'

class HomePage extends React.Component {

  render(){
    return(
      <div className="HomePage">
        <img src={typewriteredit} width="550px"></img>
        <br></br>
        <div className="aboutHome">
          <br></br>
          {this.props.auth ? <button className="homebutton" onClick={() => this.props.history.push('/prompts')}>Prompts</button> : <button className="homebutton" onClick={() => this.props.history.push('/register')}>Register</button>}
          {this.props.auth ? <button className="homebutton" onClick={() => this.props.history.push('/stories')}>Stories</button> : <button className="homebutton" onClick={() => this.props.history.push('/login')}>Login</button>}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {auth: state.mainReducer.auth}
}

export default connect(mapStateToProps, {getUser, saveAuth, logout})(HomePage)
