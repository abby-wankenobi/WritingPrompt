import React from 'react'
import { connect } from 'react-redux'
import { setStory } from '../../actions/content_actions'

class UpdatePrompt extends React.Component {

  state = {
    url: `http://localhost:3000/prompts/${this.props.match.params.id}`,
    content: ""
  }

  componentWillMount() {
    if (!this.props.prompt) {
      this.props.history.push(`/prompts/${this.props.match.params.id}`)
    } else {
      this.setState({
        content: this.props.prompt.content
      })
    }
  }

  updatePrompt = (e) => {
    e.preventDefault()
    fetch(this.state.url, {
      method: "PATCH",
      headers: {
        "Authorization": `Token token=${ this.props.user.token }`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: {
          content: this.state.content
        }
      })
    })
    .then(r => this.props.history.push(`/prompts/${this.props.prompt.id}`))
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render (){

    let prompt
    if (this.props.prompt){
      prompt = (
        <div className="PromptsPage">
          <br></br>
          <br></br>
            <img src="https://cdn.website.thryv.com/df067c1490014b358cb79c081e2821cb/DESKTOP/png/488.png" width="200px"></img>
          <br></br>
          <br></br>
          <form onChange={this.handleChange}>
            <textarea className="inputfield" rows="30" cols="50" name="content" value={this.state.content} />
            <br></br>
            <button className="likebutton" onClick={this.updatePrompt}>Update</button>
          </form>
        </div>
      )
    }

    return(
      <div>
        {prompt}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    prompt: state.contentReducer.prompt,
    user: state.mainReducer.auth
  }
}

export default connect(mapStateToProps, { setStory })(UpdatePrompt)
