import React from 'react';

class UserPrompt extends React.Component {

  render(){
    return(
      <div onClick={() => this.props.history.push(`/prompts/${this.props.prompt.id}`)}>
        <br></br>
        Content: {this.props.prompt.content}
        <br></br>
      </div>
    )
  }

}

export default UserPrompt
