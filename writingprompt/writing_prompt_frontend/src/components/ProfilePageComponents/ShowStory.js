import React from 'react'
import { connect } from 'react-redux'
import { setStory, addComment, getLikes, deleteLike, addLike } from '../../actions/content_actions'
import Comments from './Comments'

class ShowStory extends React.Component {

  state = {
    url: `https://wp-backend.herokuapp.com/stories/${this.props.match.params.id}`,
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
    .then(r => this.props.history.push(`/users/${this.props.user.user_id}`))
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("https://wp-backend.herokuapp.com/comments", {
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
    fetch(`https://wp-backend.herokuapp.com/storylikes`, {
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
    fetch(`https://wp-backend.herokuapp.com/storylikes/${id}`, {
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
              <button className="likebutton" onClick={() => this.handleUnlike(storyLike.id)}>Unlike</button>
            )
      } else {
            userLike = (
              <button className="likebutton" onClick={this.handleLike}>Like</button>
            )
      }
    }


    let story
    if (this.props.story){
      const comments = this.props.story.comments.map(comment => <Comments history={this.props.history} comment={comment} />)
      story = (
      <div className="eachStoryContainer">
        <div className="eachStory">
          <h3 className="storyPrompt">{this.props.story.prompt.content}</h3>
          <br></br>
            <br></br>
            <img className="linebreak" src="https://cdn.website.thryv.com/df067c1490014b358cb79c081e2821cb/DESKTOP/png/488.png" width="300px"></img>
            <br></br>
          <br></br>
          <p className="storyTitle">{this.props.story.title}</p>
          <h5 onClick={() => this.props.history.push(`/users/${this.props.story.user.id}`)}>By: {this.props.story.user.username}</h5>
          <br></br>
          <p className="storyContent">{this.props.story.content}</p>
          <br></br>
            <br></br>
            <img className="linebreak" src="https://cdn.website.thryv.com/df067c1490014b358cb79c081e2821cb/DESKTOP/png/488.png" width="300px"></img>
            <br></br>
          {userLike}
          <br></br>
          <img src="https://i.pinimg.com/originals/23/1f/43/231f433738c1dd96e111b77b10e9b133.jpg" width="15px"></img>
          <a>{this.props.story.likes.length}</a>
          <br></br>
          <br></br>
          { this.props.story.user.id === this.props.user.user_id ? <button className="homeProfileButton" onClick={() => this.props.history.push(`/stories/${this.props.story.id}/edit`)}>Update</button> : null }
          { this.props.story.user.id === this.props.user.user_id ? <button className="homeProfileButton" onClick={this.deleteStory}>Delete</button> : null }
          <br></br>
          <br></br>
        </div>
        <div className="comments">
          <br></br>
          <button className="homeProfileButton" onClick={() => this.props.history.push(`/home`)}>Home</button>
          <button className="homeProfileButton" onClick={() => this.props.history.push(`/users/${this.props.user.user_id}`)}>Back to Profile</button>
          <br></br>
          <br></br>
          <br></br>
          <form onChange={this.handleChange}>
            <input value={this.state.title} name="title" placeholder="Title"/>
            <br></br>
            <textarea value={this.state.content} name="content" rows="6" cols="32" placeholder="Leave a Comment..." />
            <br></br>
            <button className="homeProfileButton" onClick={this.handleSubmit}>Submit</button>
          </form>
          <br></br>
          <br></br>
          <h2>Comments</h2>
          <br></br>
          {comments}
        </div>
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
