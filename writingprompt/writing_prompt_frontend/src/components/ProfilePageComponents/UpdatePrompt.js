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
    .then(r => this.props.history.push(`/users/${this.props.user.id}`))
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
        <div className="EditStory">
          <br></br>
          <form onChange={this.handleChange}>
            <textarea rows="30" name="content" value={this.state.content} />
            <br></br>
            <button className="likebutton" Click={this.updatePrompt}>Save</button>
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
