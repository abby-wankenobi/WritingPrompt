import React from 'react';
import { connect } from 'react-redux'
import {getUser, saveAuth, logout} from '../actions/auth_actions'

class HomePage extends React.Component {

  render(){
    return(
      <div className="HomePage">
        <img src="https://img.clipartxtras.com/e60cabf0238b5b335ede58a128a3636b_172-best-drawing-images-on-pinterest-doodles-drawings-and-typewriter-drawing-tumblr_736-1053.jpeg" width="550px"></img>
        <br></br>
        <div className="aboutHome">
          <h2>About</h2>
          <br></br>
          <p>Some bullshit about this app.</p>
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
