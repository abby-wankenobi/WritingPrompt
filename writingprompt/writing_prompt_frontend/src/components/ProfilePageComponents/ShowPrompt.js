import React from 'react'
import { connect } from 'react-redux'
import { setPrompt, addPromptLike, getPromptLikes, deletePromptLike } from '../../actions/content_actions'
import NewStoryForm from '../NewStoryForm'

class ShowPrompt extends React.Component {

  state = {
    url: `https://wp-backend.herokuapp.com/prompts/${this.props.match.params.id}`,
    mode: "show",
    promptlike: "like"
  }

  componentDidMount() {
      console.log( 'USER', this.props.user )

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
    fetch(`https://wp-backend.herokuapp.com/promptlikes`, {
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
    fetch(`https://wp-backend.herokuapp.com/promptlikes/${id}`, {
      method: "DELETE",
      headers: {"Authorization": `Token token=${ this.props.user.token }`}
    })
    .then(like => this.props.deletePromptLike(id))
  }


  render (){
  console.log(this.props)

  let userLike
  if (this.props.prompt && this.props.user){
    let promptLike = this.props.promptLikes && this.props.promptLikes.find(like => like.prompt_id === this.props.prompt.id)
    if (promptLike) {
          userLike = (
            <button className="likebutton" onClick={() => this.handleUnlike(promptLike.id)}>Unlike</button>
          )
    } else {
          userLike = (
            <button className="likebutton" onClick={this.handleLike}>Like</button>
          )
    }
  }

    let prompt
    if (this.props.prompt){
      prompt = (
        <div className="eachPrompt">
          <br></br>
          <img className="linebreak" src="https://cdn.website.thryv.com/df067c1490014b358cb79c081e2821cb/DESKTOP/png/488.png" width="300px"></img>
          <br></br>
          <br></br>
          <br></br>
          <h2>{this.props.prompt.content}</h2>
          <br></br>
          <h4>Genre: {this.props.prompt.genre.title}</h4>
          <br></br>
          {userLike}
          <br></br>
            <img src="https://i.pinimg.com/originals/23/1f/43/231f433738c1dd96e111b77b10e9b133.jpg" width="15px"></img>
            <a>{this.props.prompt.likes.length}</a>
          <br></br>
            <br></br>
            <img className="linebreak" src="https://cdn.website.thryv.com/df067c1490014b358cb79c081e2821cb/DESKTOP/png/488.png" width="300px"></img>
            <br></br>
            <br></br>
            <div className="promptButtons">
              { this.props.prompt.user && this.props.prompt.user.id === this.props.user.user_id ? <button className="likebutton" onClick={() => this.props.history.push(`/prompts/${this.props.prompt.id}/edit`)}>Update</button> : null }
              { this.props.prompt.user && this.props.prompt.user.id === this.props.user.user_id ? <button className="likebutton" onClick={this.deletePrompt}>Delete</button> : null }
              <button className="likebutton" onClick={() => this.props.history.push(`/home`)}>Home</button>
              <button className="likebutton" onClick={() => this.props.history.push(`/users/${this.props.user.user_id}`)}>Back to Profile</button>
              { this.props.user ? <button className="likebutton" onClick={this.handleClick}>Create New Story</button> : null }
              { this.state.mode === "edit" ? <NewStoryForm history={this.props.history} prompt={this.props.prompt} /> : null}
            </div>
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
