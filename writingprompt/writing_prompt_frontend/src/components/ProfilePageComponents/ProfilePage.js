import React from 'react';
import { connect } from 'react-redux'
import { getUserInfo } from '../../actions/content_actions'
import ProfileStory from './ProfileStory'
import UserPrompt from './UserPrompt'


class ProfilePage extends React.Component{


  componentWillMount(){
    this.props.getUserInfo(this.props.auth.user_id)
  }


  render(){

    let userStories = "cheese"
    let username
    let bio
    let userPrompts
    if (this.props.user_info) {
      console.log('beef')
      username = this.props.user_info.username
      bio = this.props.user_info.bio
      userStories = this.props.user_info.stories.map(story => <ProfileStory history={this.props.history} story={story}/>)
      userPrompts = this.props.user_info.prompts.map(prompt => <UserPrompt history={this.props.history} prompt={prompt} />)
    }
    console.log(this.props)

    return(
      <div className="ProfilePage">
        <div>
          Username: {username}
          <br></br>
          Bio: {bio}
          <br></br>
          { this.props.match.params.id == this.props.auth.user_id ? <button onClick={() => this.props.history.push(`/newStory`)}>Create New Story</button> : null }
          <br></br>
          { this.props.match.params.id == this.props.auth.user_id ? <button history={this.props.history} onClick={() => this.props.history.push(`/newPrompt`)}>Create New Prompt</button> : null }
        </div>
        <br></br>
        <br></br>
        <h3>Your Stories</h3>
        {userStories}
        <br></br>
        <h3>Your Prompts</h3>
        {userPrompts}
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
