import React from 'react';


class PromptComponent extends React.Component{

  render(){
    return(
      <div className="promptContainer">
        <p>{this.props.prompt.content}</p>
          <br></br>
          <img src="https://i.pinimg.com/originals/23/1f/43/231f433738c1dd96e111b77b10e9b133.jpg" width="15px"></img>
          <a>{this.props.prompt.likes.length}</a>
          <br></br>
          <br></br>
          <a onClick={() => this.props.history.push(`/prompts/${this.props.prompt.id}`)}>See More...</a>
          <br></br>
          <br></br>
          <img src="https://cdn.website.thryv.com/df067c1490014b358cb79c081e2821cb/DESKTOP/png/488.png" width="300px"></img>
          <br></br>
          <br></br>
      </div>
    )
  }
}

export default PromptComponent
