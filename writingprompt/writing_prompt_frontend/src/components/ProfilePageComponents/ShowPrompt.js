import React from 'react'
import { connect } from 'react-redux'
import { setPrompt, addPromptLike, getPromptLikes, deletePromptLike } from '../../actions/content_actions'
import NewStoryForm from '../NewStoryForm'

class ShowPrompt extends React.Component {

  state = {
    url: `http://localhost:3000/prompts/${this.props.match.params.id}`,
    mode: "show",
    promptlike: "like"
  }


  componentDidMount() {
    fetch(this.state.url)
    .then(res => res.json())
    .then(prompt => {
      this.props.setPrompt(prompt)
      this.props.getPromptLikes(this.props.user)
    })
  }

  deletePrompt = () => {
    fetch(this.state.url, {
      method: "DELETE",
      headers: {"Authorization": `Token token=${ this.props.user.token }`}
    })
    .then(r => this.props.history.push(`/users/${this.props.user.user_id}`))
  }

  handleClick = () => {
    this.setState({
      mode: "edit"
    })
  }

  handleLike = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/promptlikes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token token=${ this.props.user.token }`
      },
      body: JSON.stringify({
        promptlike: {
          user_id: this.props.user.user_id,
          prompt_id: this.props.prompt.id
        }
      })
    })
    .then(r => r.json())
    .then(like => this.props.addPromptLike(like))
  }

  handleUnlike = (id) => {
    fetch(`http://localhost:3000/promptlikes/${id}`, {
      method: "DELETE",
      headers: {"Authorization": `Token token=${ this.props.user.token }`}
    })
    .then(like => this.props.deletePromptLike(id))
  }


  render (){
  console.log(this.props)

  let userLike
  if (this.props.prompt && this.props.user){
    let promptLike = this.props.promptLikes.find(like => like.prompt_id === this.props.prompt.id)
    if (promptLike) {
          userLike = (
            <button onClick={() => this.handleUnlike(promptLike.id)}>Unlike</button>
          )
    } else {
          userLike = (
            <button onClick={this.handleLike}>Like</button>
          )
    }
  }

    let prompt
    if (this.props.prompt){
      prompt = (
        <div className="eachPrompt">
          <h3>{this.props.prompt.content}</h3>
          <br></br>
          {userLike}
          <br></br>
          Prompt Likes: {this.props.prompt.likes.length}
          <br></br>
          { this.props.user ? <button onClick={this.handleClick}>Create New Story</button> : null }
          <br></br>
          { this.state.mode === "edit" ? <NewStoryForm history={this.props.history} prompt={this.props.prompt} /> : null}
          <br></br>
          { this.props.prompt.user && this.props.prompt.user.id === this.props.user.user_id ? <button onClick={() => this.props.history.push(`/prompts/${this.props.prompt.id}/edit`)}>Update</button> : null }
          <br></br>
          { this.props.prompt.user && this.props.prompt.user.id === this.props.user.user_id ? <button onClick={this.deletePrompt}>Delete</button> : null }
          <br></br>
          <br></br>
          <button onClick={() => this.props.history.push(`/home`)}>Home</button>
          <br></br>
          <button onClick={() => this.props.history.push(`/users/${this.props.user.user_id}`)}>Back to Profile</button>
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
    user: state.mainReducer.auth,
    promptLikes: state.contentReducer.promptLikes
  }
}

export default connect(mapStateToProps, { setPrompt, addPromptLike, getPromptLikes, deletePromptLike })(ShowPrompt)
