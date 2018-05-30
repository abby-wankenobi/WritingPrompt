import React from 'react';
import { connect } from 'react-redux'
import { getUserInfo } from '../../actions/content_actions'
import ProfileStory from './ProfileStory'
import UserPrompt from './UserPrompt'


class ProfilePage extends React.Component{

  state = {
    divMode: "newsfeed"
  }


  componentWillMount(){
    this.props.getUserInfo(this.props.auth.user_id)
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
      userStories = this.props.user_info.stories.map(story => <ProfileStory history={this.props.history} story={story}/>)
      userPrompts = this.props.user_info.prompts.map(prompt => <UserPrompt history={this.props.history} prompt={prompt} />)
      likedStories = this.props.user_info.storylike.map(prompt => <UserPrompt history={this.props.history} prompt={prompt} />)
      likedPrompts = this.props.user_info.promptlikes.map(like => <UserPrompt history={this.props.history} prompt={prompt} />)
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
            {userStories}
          </div>
        )
        break
      case "yourprompts":
        mainDiv = (
          <div>
            {userPrompts}
          </div>
        )
        break
      case "likedstories":
        mainDiv = (
          <div>
            liked stories
            {likedStories}
          </div>
        )
        break
      case "likedprompts":
        mainDiv = (
          <div>
            liked prompts
            {likedPrompts}
          </div>
        )
      }

    console.log(this.props)

    return(
      <div className="ProfilePage">
        <div>
          Username: {username}
          <br></br>
          Bio: {bio}
          <br></br>
          { this.props.match.params.id == this.props.auth.user_id ? <button className="likebutton" history={this.props.history} onClick={() => this.props.history.push(`/newStory`)}>Create New Story</button> : null }
          <br></br>
          { this.props.match.params.id == this.props.auth.user_id ? <button className="likebutton" history={this.props.history} onClick={() => this.props.history.push(`/newPrompt`)}>Create New Prompt</button> : null }
        </div>

        <div>
          <button name="yourstories" className="likebutton" onClick={this.handleClick}>Your Stories</button>
          <br></br>
          <button name="yourprompts" className="likebutton" onClick={this.handleClick}>Your Prompts</button>
          <br></br>
          <button name="likedstories" className="likebutton" onClick={this.handleClick}>Liked Stories</button>
          <br></br>
          <button name="likedprompts" className="likebutton" onClick={this.handleClick}>Liked Prompts</button>
          <br></br>
          <button name="newsfeed" className="likebutton" onClick={this.handleClick}>News Feed</button>
        </div>

       <div>
         {mainDiv}
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
