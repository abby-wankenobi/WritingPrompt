import React from 'react';


class PromptComponent extends React.Component{

  render(){
    return(
      <li onClick={() => this.props.history.push(`/prompts/${this.props.prompt.id}`)}>
        {this.props.prompt.content}
        <br></br>
        <br></br>
      </li>
    )
  }

}

export default PromptComponent
