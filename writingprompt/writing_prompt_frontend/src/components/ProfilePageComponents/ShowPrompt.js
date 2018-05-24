import React from 'react'
import { connect } from 'react-redux'
import { setPrompt } from '../../actions/content_actions'
import NewStoryForm from '../NewStoryForm'

class ShowPrompt extends React.Component {

  state = {
    url: `http://localhost:3000/prompts/${this.props.match.params.id}`,
    mode: "show",
    like: ""
  }


  componentDidMount() {
    fetch(this.state.url)
    .then(res => res.json())
    .then(prompt => this.props.setPrompt(prompt))
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

  handleLike = () => {
    this.setState({
      like: "unlike"
    })
  }

  render (){
  console.log(this.props)

    let like
    if(this.state.like === "liked") {
      like = (
        <div>
          <button onClick={this.handleLike}>Unlike</button>
        </div>
      )
    }

    let prompt
    if (this.props.prompt){
      prompt = (
        <div className="eachPrompt">
          <h3>{this.props.prompt.content}</h3>
          <br></br>
          { this.props.user ? <button onClick={this.handleClick}>Like</button> : null }
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
    user: state.mainReducer.auth
  }
}

export default connect(mapStateToProps, { setPrompt })(ShowPrompt)
