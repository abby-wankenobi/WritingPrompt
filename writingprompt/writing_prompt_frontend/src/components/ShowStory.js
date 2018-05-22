import React from 'react'
import { connect } from 'react-redux'
import { setStory } from '../actions/content_actions'

class ShowStory extends React.Component {

  state = {
    url: `http://localhost:3000/stories/${this.props.match.params.id}`
  }


  componentDidMount() {
    fetch(this.state.url)
    .then(res => res.json())
    .then(story => this.props.setStory(story))
  }

  deleteStory = () => {
    fetch(this.state.url, {
      method: "DELETE",
      headers: {"Authorization": `Token token=${ this.props.user.token }`}
    })
    .then(r => this.props.history.push(`/users/${this.props.user.id}`))
  }


  render (){

    let story
    if (this.props.story){
      story = (
        <div className="eachStory">
          <h3>{this.props.story.prompt.content}</h3>
          <br></br>
          <h3>{this.props.story.title}</h3>
          <h5>{this.props.story.content}</h5>
          <br></br>
          { this.props.story.user.id === this.props.user.user_id ? <button onClick={() => this.props.history.push(`/stories/${this.props.story.id}/edit`)}>Update</button> : null }
          <br></br>
          { this.props.story.user.id === this.props.user.user_id ? <button onClick={this.deleteStory}>Delete</button> : null }
          <br></br>
          <button onClick={() => this.props.history.push(`/users/${this.props.user.id}`)}>Back to Profile</button>
        </div>
      )
    }

    return(
      <div>
        {story}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    story: state.contentReducer.story,
    user: state.mainReducer.auth
  }
}

export default connect(mapStateToProps, { setStory })(ShowStory)
