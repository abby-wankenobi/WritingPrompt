import React from 'react';

class LikedStory extends React.Component {

  render(){
    console.log(this.props)
    return(
      <div onClick={() => this.props.history.push(`/prompts/${this.props.like.story_id}`)}>
        <br></br>
        {this.props.like.title}
        <br></br>
      </div>
    )
  }

}

export default LikedStory
