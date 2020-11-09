import React from 'react';
import { connect } from 'react-redux'
import {getUser, saveAuth, logout} from '../actions/auth_actions'
import typewriteredit from './images/typewriteredit.jpg'

class HomePage extends React.Component {

  render(){
    return(
      <div className="HomePage">
          <div className="underConstructionContainer">
              <div className="underConstruction">
                  <div style={ { fontSize: '80px', fontWeight: 'bold', paddingRight: '25px' } }>!</div>
                  <div>
                      <h3>Our new website is on its way!</h3>
                      <p>We're currently working on our redesign and we will be back soon. In the meantime, <b>keep writing!</b></p>
                  </div>
              </div>
          </div>
          <div className="HomeSectionOne">
              <img src={typewriteredit}></img>
              <div className="homeRightContainer">
                  <div className="homeRightDescription">
                      <h1>Welcome to unTitled</h1>
                      <span>Whether you're a new writer looking to explore your creative side, or a seasoned writer who's having trouble escaping from your writer's block, unTitled is here to help you on your journey. </span>
                  </div>
                  <p>Please join us when we're back!</p>
                  <div className="aboutHome">
                    {/*}{this.props.auth ? <button type="button" disabled className="homebutton" onClick={() => this.props.history.push('/prompts')}>Prompts</button> : <button className="homebutton" onClick={() => this.props.history.push('/register')}>Register</button>}
                    {this.props.auth ? <button type="button" disabled className="homebutton" onClick={() => this.props.history.push('/stories')}>Stories</button> : <button className="homebutton" onClick={() => this.props.history.push('/login')}>Login</button>}*/}
                    <button className="homebutton">Register</button>
                    <button className="homebutton">Login</button>
                  </div>
              </div>
          </div>
          <div className="HomeSectionTwo">
              <div className="homeRightContainer">
                  <div className="homeRightDescription">
                      <h1 className="sectionHeader">Prompts</h1>
                      <span>Explore writing prompts to help jumpstart your creative energy. Search by category and find the perfect prompt to suit your mood.</span>
                  </div>
              </div>
              <div className="promptContainer">
                <p>It's 3 AM. An official phone alert wakes you up. It says "DO NOT LOOK AT THE MOON". You have hundreds of notifications. Hundreds of random numbers are sending "It's a beautiful night tonight. Look outside."</p>
                <div className="promptContainerBottom">
                    <a>See More...</a>
                    <div className="likescontainer">
                        <img src="https://i.pinimg.com/originals/23/1f/43/231f433738c1dd96e111b77b10e9b133.jpg" width="20px"></img>
                        <a>98</a>
                    </div>
                </div>
              </div>
          </div>
          <div className="HomeSectionThree">
              <div className="promptContainer">
                <h3>Bad Luck Charm</h3>
                <p style={ { fontSize: '12px' } }>By Madi S.</p>
                <p>One month. That was how long it took for the coincidences to all pay off. Finding twenty dollars on the ground. Using it to buy a lottery ticket, and winning. Investing in stocks and plans that paid off perfectly...</p>
                <div className="promptContainerBottom">
                    <a>Continue Reading...</a>
                    <div className="likescontainer">
                        <img src="https://i.pinimg.com/originals/23/1f/43/231f433738c1dd96e111b77b10e9b133.jpg" width="20px"></img>
                        <a>112</a>
                    </div>
                </div>
              </div>
              <div className="homeRightContainer">
                  <div className="homeRightDescription">
                      <h1 className="sectionHeader">Stories</h1>
                      <span>Find a prompt that inspires you and write away! Share your story with other writers, or search through already written stories and leave your feedback.</span>
                  </div>
              </div>
          </div>
          <div className="HomeSectionFour">
              <div className="homeRightContainer">
                  <div className="homeRightDescription">
                      <h1 className="sectionHeader">Join a community</h1>
                      <span>Join our community of talented creative writers. Explore other user's stories and give your feedback, or participate in writing prompts of your own to inspire others.</span>
                  </div>
              </div>
              <div style={ { width: '362px', textAlign: 'center' } }>
                  <img src="https://i.pinimg.com/originals/23/1f/43/231f433738c1dd96e111b77b10e9b133.jpg" width="250px"></img>
              </div>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {auth: state.mainReducer.auth}
}

export default connect(mapStateToProps, {getUser, saveAuth, logout})(HomePage)
