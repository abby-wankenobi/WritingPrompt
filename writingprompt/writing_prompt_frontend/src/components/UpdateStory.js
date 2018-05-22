import React from 'react'
import { connect } from 'react-redux'
import { setStory } from '../actions/content_actions'

class ShowStory extends React.Component {

  state = {
    url: `http://localhost:3000/stories/${this.props.match.params.id}`,
    title: "",
    content: ""
  }

  componentWillMount() {
    if (!this.props.story) {
      this.props.history.push(`/stories/${this.props.match.params.id}`)
    } else {
      this.setState({
        title: this.props.story.title,
        content: this.props.story.content
      })
    }
  }

  updateStory = (e) => {
    e.preventDefault()
    fetch(this.state.url, {
      method: "PATCH",
      headers: {
        "Authorization": `Token token=${ this.props.user.token }`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        story: {
          title: this.state.title,
          content: this.state.content
        }
      })
    })
    .then(r => this.props.history.push(`/users/${this.props.user.id}`))
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render (){

    let story
    if (this.props.story){
      story = (
        <div className="EditStory">
          <h3>{this.props.story.prompt.content}</h3>
          <br></br>
          <form onChange={this.handleChange}>
            <input name="title" value={this.state.title} />
            <br></br>
            <textarea rows="30" name="content" value={this.state.content} />
            <br></br>
            <button onClick={this.updateStory}>Save</button>
          </form>
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
