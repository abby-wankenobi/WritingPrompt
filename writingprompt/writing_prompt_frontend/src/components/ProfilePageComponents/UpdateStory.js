import React from 'react'
import { connect } from 'react-redux'
import { setStory } from '../../actions/content_actions'

class UpdateStory extends React.Component {

  state = {
    url: `https://wp-backend.herokuapp.com//stories/${this.props.match.params.id}`,
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
        <div className="PromptsPage">
          <h3 className="eachPrompt">{this.props.story.prompt.content}</h3>
          <br></br>
          <br></br>
            <img src="https://cdn.website.thryv.com/df067c1490014b358cb79c081e2821cb/DESKTOP/png/488.png" width="200px"></img>
          <br></br>
          <br></br>
          <form onChange={this.handleChange}>
            <input className="storytitle" name="title" value={this.state.title} />
            <br></br>
            <textarea className="inputfield" rows="30" cols="50" name="content" value={this.state.content} />
            <br></br>
            <button className="likebutton" onClick={this.updateStory}>Update</button>
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

export default connect(mapStateToProps, { setStory })(UpdateStory)
