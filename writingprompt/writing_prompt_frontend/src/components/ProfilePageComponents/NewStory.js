import React from 'react';
import NewStoryForm from '../NewStoryForm'
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
    if (e.target.value !== 'nothing') {
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
  }

  handleClick = () => {
    let i = Math.floor(Math.random()*this.props.prompts.length)
    this.setState({
      prompt: this.props.prompts[i]
    })
  }
  //
  // handleTextChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   })
  // }
  //
  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   fetch("http://localhost:3000/stories", {
  //     method: "POST",
  //     headers: {
  //       "Authorization": `Token token=${ this.props.user.token }`,
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify ({
  //       story: {
  //         user_id: this.props.user.user_id,
  //         prompt_id: this.state.prompt.id,
  //         title: this.state.title,
  //         content: this.state.content
  //       }
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(story => {
  //     this.props.history.push(`/stories/${story.id}`)
  //   })
  // }


  render(){

  let genres
  if (this.props.genres) {
    genres = this.props.genres.map(genre => <option value={genre.id}>{genre.title}</option>)
  }


console.log(this.props)
    return(
      <div className="NewStory">
        <h3>Choose a Prompt</h3>
        <br></br>
        <select onChange={this.handleChange}>
          <option value="nothing">Select a Genre...</option>
          {genres}
        </select>
        <br></br>
        <br></br>
        <h5>Or Get A Random Prompt</h5>
        <button onClick={this.handleClick}>Random Prompt</button>
        <br></br>
        <br></br>
        <h3>{this.state.prompt.content}</h3>
        <NewStoryForm history={this.props.history} prompt={this.state.prompt} />
        <br></br>
        <button onClick={() => this.props.history.push(`/users/${this.props.user.user_id}`)}>Back to Profile</button>
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
