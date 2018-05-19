import React from 'react';


class PromptComponent extends React.Component{

  render(){
    console.log(this.props)
    return(
      <li>
        {this.props.prompt.content}
        <br></br>
        <br></br>
      </li>
    )
  }

}

export default PromptComponent
