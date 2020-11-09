import React from 'react';


class StoryComponent extends React.Component{

  render(){
    console.log(this.props)
    return(
      <div className="promptContainer">
        <p className="storyTitle">{this.props.story.title}</p>
        <p>{this.props.story.content.substring(0,500)}...</p>
        <div className="promptContainerBottom">
            <a onClick={() => this.props.history.push(`/stories/${this.props.story.id}`)}>See More...</a>
            <div className="likescontainer">
                <img src="https://i.pinimg.com/originals/23/1f/43/231f433738c1dd96e111b77b10e9b133.jpg" width="20px"></img>
                    <a>{this.props.story.likes.length}</a>
            </div>
        </div>
      </div>
    )
  }

}

export default StoryComponent
