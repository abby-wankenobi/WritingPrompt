import React from 'react';


class StoryComponent extends React.Component{

  render(){
    console.log(this.props)
    return(
      <li onClick={() => this.props.history.push(`/stories/${this.props.story.id}`)}>
        {this.props.story.title}
        <br></br>
        <br></br>
      </li>
    )
  }

}

export default StoryComponent
