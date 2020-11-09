import React from 'react';


class PromptComponent extends React.Component{

  render(){
    return(
      <div className="promptContainer">
        <p>{this.props.prompt.content}</p>
        <div className="promptContainerBottom">
            <a onClick={() => this.props.history.push(`/prompts/${this.props.prompt.id}`)}>See More...</a>
            <div className="likescontainer">
                <img src="https://i.pinimg.com/originals/23/1f/43/231f433738c1dd96e111b77b10e9b133.jpg" width="20px"></img>
                <a>{this.props.prompt.likes.length}</a>
            </div>
        </div>
          
      </div>
    )
  }
}

export default PromptComponent
