import React from 'react';


class StoryComponent extends React.Component{

  render(){
    console.log(this.props)
    return(
      <div className="promptContainer">
        <p className="storyTitle">{this.props.story.title}</p>
        <br></br>
        <p>{this.props.story.content.substring(0,500)}...</p>
        <br></br>
        <img src="https://i.pinimg.com/originals/23/1f/43/231f433738c1dd96e111b77b10e9b133.jpg" width="15px"></img>
        <a>{this.props.story.likes.length}</a>
        <br></br>
        <br></br>
        <a onClick={() => this.props.history.push(`/stories/${this.props.story.id}`)}>See More...</a>
        <br></br>
        <br></br>
        <img src="https://cdn.website.thryv.com/df067c1490014b358cb79c081e2821cb/DESKTOP/png/488.png" width="300px"></img>
        <br></br>
        <br></br>
      </div>
    )
  }

}

export default StoryComponent
