import React from 'react';
import { connect } from 'react-redux'
import { getUserInfo } from '../actions/content_actions'
import ProfileStory from './ProfileStory'


class ProfilePage extends React.Component{


  componentWillMount(){
    this.props.getUserInfo(this.props.auth.user_id)
  }


  render(){

    let userStories = "cheese"
    let username
    let bio
    if (this.props.user_info) {
      console.log('beef')
      username = this.props.user_info.username
      bio = this.props.user_info.bio
      userStories = this.props.user_info.stories.map(story => <ProfileStory story={story}/>)
    }
    console.log(this.props.user_info)

    return(
      <div className="ProfilePage">
        <div>
          Username: {username}
          <br></br>
          Bio: {bio}
          <br></br>
          <button onClick={() => this.props.history.push('/newstory')}>Create New Story</button>
          <br></br>
          <button>Create New Prompt</button>
        </div>

        {userStories}
      </div>
    )
  }

}

function mapStateToProps(state){
  return {user_info: state.contentReducer.user_info,
    auth: state.mainReducer.auth}
}

export default connect(mapStateToProps, {getUserInfo})(ProfilePage)
