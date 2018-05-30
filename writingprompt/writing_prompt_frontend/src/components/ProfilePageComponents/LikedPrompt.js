import React from 'react';

class LikedPrompt extends React.Component {

  render(){
    return(
      <div onClick={() => this.props.history.push(`/prompts/${this.props.like.prompt_id}`)}>
        <br></br>
        {this.props.like.content}
        <br></br>
      </div>
    )
  }

}

export default LikedPrompt
