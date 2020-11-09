import React from 'react';
import { connect } from 'react-redux'
import { getUserInfo } from '../../actions/content_actions'
import UserPrompt from './UserPrompt'
import LikedStory from './LikedStory'
import LikedPrompt from './LikedPrompt'
import StoryComponent from '../StoryComponent'
import PromptComponent from '../PromptComponent'

class ProfilePage extends React.Component{

  state = {
    divMode: "yourstories"
  }


  componentWillMount(){
    console.log('stuff', this.props)
    this.props.getUserInfo(this.props.match.params.id)
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState({
      divMode: e.target.name
    })
  }


  render(){

    let userStories
    let username
    let bio
    let userPrompts
    let likedStories
    let likedPrompts
    if (this.props.user_info) {
      username = this.props.user_info.username
      bio = this.props.user_info.bio
      userStories = this.props.user_info.stories.map(story => <StoryComponent history={this.props.history} story={story}/>)
      userPrompts = this.props.user_info.prompts.map(prompt => <PromptComponent history={this.props.history} prompt={prompt} />)
      likedStories = this.props.user_info.storylike.map(story => <StoryComponent history={this.props.history} story={story} />)
      likedPrompts = this.props.user_info.promptlikes.map(prompt => <PromptComponent history={this.props.history} prompt={prompt} />)
    }


    let mainDiv

    switch(this.state.divMode) {
      case "newsfeed":
        mainDiv = (
          <div>
            news feed will go here...
          </div>
        )
        break
      case "yourstories":
        mainDiv = (
          <div>
            <div className="title">
              <p className="pageHeader">Stories</p>
              <img src="https://cdn.website.thryv.com/df067c1490014b358cb79c081e2821cb/DESKTOP/png/488.png" width="200px"></img>
            </div>
            {userStories}
          </div>
        )
        break
      case "yourprompts":
        mainDiv = (
          <div>
            <div className="title">
              <p className="pageHeader">Prompts</p>
              <img src="https://cdn.website.thryv.com/df067c1490014b358cb79c081e2821cb/DESKTOP/png/488.png" width="200px"></img>
            </div>
            {userPrompts}
          </div>
        )
        break
      case "likedstories":
        mainDiv = (
          <div>
            <div className="title">
              <p className="pageHeader">Liked Stories</p>
              <img src="https://cdn.website.thryv.com/df067c1490014b358cb79c081e2821cb/DESKTOP/png/488.png" width="200px"></img>
            </div>
            {likedStories}
          </div>
        )
        break
      case "likedprompts":
        mainDiv = (
          <div>
            <div className="title">
              <p className="pageHeader">Liked Prompts</p>
              <img src="https://cdn.website.thryv.com/df067c1490014b358cb79c081e2821cb/DESKTOP/png/488.png" width="200px"></img>
            </div>
            {likedPrompts}
          </div>
        )
      }

    console.log(this.props)

    return(
      <div className="ProfileContainer">
          <div className="ProfileInnerContainer">
                <div className="ProfilePage">
                    <div className="profileInfo">
                        <p className="Username" style={ { paddingBottom: '10px' } }>{username}</p>
                        <p>Bio:</p>
                        <p className="Bio">"{bio}"</p>
                    </div>
                    <div className="ProfileButtonsContainer">
                        { this.props.match.params.id == this.props.auth.user_id ? <button className="ProfileButtons" history={this.props.history} onClick={() => this.props.history.push(`/newStory`)}>Create New Story</button> : null }
                        { this.props.match.params.id == this.props.auth.user_id ? <button className="ProfileButtons" history={this.props.history} onClick={() => this.props.history.push(`/newPrompt`)}>Create New Prompt</button> : null }
                        <button name="yourstories" className="ProfileButtons" onClick={this.handleClick}>Stories</button>
                        <button name="yourprompts" className="ProfileButtons" onClick={this.handleClick}>Prompts</button>
                        <button name="likedstories" className="ProfileButtons" onClick={this.handleClick}>Liked Stories</button>
                        <button name="likedprompts" className="ProfileButtons" onClick={this.handleClick}>Liked Prompts</button>
                    </div>
                </div>

               <div className="ProfileDivPage">
                 {mainDiv}
               </div>
           </div>
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    user_info: state.contentReducer.user_info,
    auth: state.mainReducer.auth}
}

export default connect(mapStateToProps, {getUserInfo})(ProfilePage)
