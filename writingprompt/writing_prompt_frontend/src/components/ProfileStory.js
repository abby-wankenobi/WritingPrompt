import React from 'react';

class ProfileStory extends React.Component {

  render(){
    return(
      <div>
        <br></br>
        Title: {this.props.story.title}
        <br></br>
        Content: {this.props.story.content}
        <br></br>
        <br></br>
      </div>
    )
  }

}

export default ProfileStory
