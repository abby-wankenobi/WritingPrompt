import React from 'react';
import { connect } from 'react-redux'
import { getGenres } from '../../actions/content_actions'

class NewPrompt extends React.Component {

  state = {
    genre: "",
    prompt: ""
  }

  componentDidMount(){
    this.props.getGenres()
  }

  handleChange = (e) => {
    this.setState({
      genre: e.target.value
    })
  }

  handleTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/prompts", {
      method: "POST",
      headers: {
        "Authorization": `Token token=${ this.props.user.token }`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify ({
        prompt: {
          user_id: this.props.user.user_id,
          content: this.state.content,
          genre_id: this.state.genre
        }
      })
    })
    .then(res => res.json())
    .then(prompt => {
      this.props.history.push(`/prompts/${prompt.id}`)
    })
  }


  render(){

  let genres
  if (this.props.genres) {
    genres = this.props.genres.map(genre => <option value={genre.id}>{genre.title}</option>)
  }


console.log(this.props.user)
    return(
      <div className="NewStory">
        <h3>Choose a Genre</h3>
        <select onChange={this.handleChange}>
          <option>Select Genre...</option>
          {genres}
        </select>
        <br></br>
        <form onChange={this.handleTextChange}>
          <textarea name="content" placeholder="New Prompt..." rows="30" cols="50"/>
          <br></br>
          <button onClick={this.handleSubmit}>Save Prompt</button>
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
    user: state.mainReducer.auth
  }
}

export default connect(mapStateToProps, { getGenres })(NewPrompt)
