import React from 'react';
import { connect } from 'react-redux'
import { getGenres, getPrompts, setStory } from '../../actions/content_actions'

class NewStory extends React.Component {

  state = {
    genre: "",
    prompt: "",
    title: "",
    story: ""
  }

  componentDidMount(){
    this.props.getGenres()
    this.props.getPrompts()
  }

  handleChange = (e) => {
    this.setState({
      genre: e.target.value
    })
    let newPrompt = this.props.prompts.filter(prompt => prompt.genre_id == e.target.value)
    let i = Math.floor(Math.random()*newPrompt.length)
    console.log(newPrompt)
    this.setState({
      prompt: newPrompt[i]
    })
  }

  handleClick = () => {
    let i = Math.floor(Math.random()*this.props.prompts.length)
    this.setState({
      prompt: this.props.prompts[i]
    })
  }

  handleTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/stories", {
      method: "POST",
      headers: {
        "Authorization": `Token token=${ this.props.user.token }`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify ({
        story: {
          user_id: this.props.user.user_id,
          prompt_id: this.state.prompt.id,
          title: this.state.title,
          content: this.state.content
        }
      })
    })
    .then(res => res.json())
    .then(story => {
      this.props.history.push(`/stories/${story.id}`)
    })
  }


  render(){

  let genres
  if (this.props.genres) {
    genres = this.props.genres.map(genre => <option value={genre.id}>{genre.title}</option>)
  }


console.log(this.props.genres)
    return(
      <div className="NewStory">
        <h3>Choose a Prompt</h3>
        <br></br>
        <h5>Select a Genre</h5>
        <select onChange={this.handleChange}>
          {genres}
        </select>
        <br></br>
        <h5>Or Get A Random Prompt</h5>
        <button onClick={this.handleClick}>Random Prompt</button>
        <br></br>
        <br></br>
        <h3>{this.state.prompt.content}</h3>
        <form onChange={this.handleTextChange}>
          <input name="title" placeholder="Title" />
          <br></br>
          <textarea name="content" placeholder="Story" rows="30" cols="50"/>
          <br></br>
          <button onClick={this.handleSubmit}>Save Story</button>
          <br></br>
          <button onClick={() => this.props.history.push(`/users/${this.props.user.user_id}`)}>Back to Profile</button>
        </form>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    genres: state.contentReducer.genres,
    prompts: state.contentReducer.prompts,
    user: state.mainReducer.auth
  }
}

export default connect(mapStateToProps, { getGenres, getPrompts, setStory })(NewStory)
