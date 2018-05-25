import React from 'react'
import { connect } from 'react-redux'
import { setStory, addComment, getLikes, deleteLike, addLike } from '../../actions/content_actions'
import Comments from './Comments'

class ShowStory extends React.Component {

  state = {
    url: `http://localhost:3000/stories/${this.props.match.params.id}`,
    title: "",
    content: "",
    storylike: "like"
  }


  componentDidMount() {
    fetch(this.state.url)
    .then(res => res.json())
    .then(story => {
      this.props.setStory(story)
      this.props.getLikes(this.props.user)
    })
  }

  deleteStory = () => {
    fetch(this.state.url, {
      method: "DELETE",
      headers: {"Authorization": `Token token=${ this.props.user.token }`}
    })
    .then(r => this.props.history.push(`/users/${this.props.user.id}`))
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        comment: {
          title: this.state.title,
          content: this.state.content,
          story_id: this.props.story.id,
          user_id: this.props.user.user_id
        }
      })
    })
    .then(r => r.json())
    .then(comment => {
      this.props.addComment(comment)
      this.setState({
        title: "",
        content: ""
      })
    })
  }

  handleLike = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/storylikes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token token=${ this.props.user.token }`
      },
      body: JSON.stringify({
        storylike: {
          user_id: this.props.user.user_id,
          story_id: this.props.story.id
        }
      })
    })
    .then(r => r.json())
    .then(like => this.props.addLike(like))
  }

  handleUnlike = (id) => {
    fetch(`http://localhost:3000/storylikes/${id}`, {
      method: "DELETE",
      headers: {"Authorization": `Token token=${ this.props.user.token }`}
    })
    .then(like => this.props.deleteLike(id))
  }


  render (){

    console.log(this.props)

    let userLike
    if (this.props.story && this.props.user){
      let storyLike = this.props.likes.find(like => like.story_id === this.props.story.id)
      if (storyLike) {
            userLike = (
              <button onClick={() => this.handleUnlike(storyLike.id)}>Unlike</button>
            )
      } else {
            userLike = (
              <button onClick={this.handleLike}>Like</button>
            )
      }
    }


    let story
    if (this.props.story){
      const comments = this.props.story.comments.map(comment => <Comments comment={comment} />)
      story = (
        <div className="eachStory">
          <h3>{this.props.story.prompt.content}</h3>
          <br></br>
          <h3>{this.props.story.title}</h3>
          <h5>{this.props.story.content}</h5>
          <br></br>
          {userLike}
          <br></br>
          Story Likes: {this.props.story.likes.length}
          <br></br>
          <br></br>
          { this.props.story.user.id === this.props.user.user_id ? <button onClick={() => this.props.history.push(`/stories/${this.props.story.id}/edit`)}>Update</button> : null }
          <br></br>
          { this.props.story.user.id === this.props.user.user_id ? <button onClick={this.deleteStory}>Delete</button> : null }
          <br></br>
          <br></br>
          <button onClick={() => this.props.history.push(`/home`)}>Home</button>
          <br></br>
          <button onClick={() => this.props.history.push(`/users/${this.props.user.user_id}`)}>Back to Profile</button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <form onChange={this.handleChange}>
            <input value={this.state.title} name="title" placeholder="Title"/>
            <textarea value={this.state.content} name="content" placeholder="Leave a Comment..." />
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
          <br></br>
          <br></br>
          <br></br>
          <h2>Comments</h2>
          <br></br>
          {comments}
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
    user: state.mainReducer.auth,
    likes: state.contentReducer.storylikes
  }
}

export default connect(mapStateToProps, { setStory, addComment, getLikes, deleteLike, addLike })(ShowStory)
