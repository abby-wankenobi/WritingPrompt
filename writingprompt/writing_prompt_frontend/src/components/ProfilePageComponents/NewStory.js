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
  //   fetch("https://wp-backend.herokuapp.com/stories", {
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
      <div className="PromptsPage">
        <p className="pageHeader">Choose a Prompt</p>
        <img src="https://cdn.website.thryv.com/df067c1490014b358cb79c081e2821cb/DESKTOP/png/488.png" width="200px"></img>
        <br></br>
        <br></br>
        <div className="selector">
          <select onChange={this.handleChange}>
            <option value="nothing">Select a Genre...</option>
            {genres}
          </select>
        </div>
        <br></br>
        <br></br>
        <h4>Or Get A Random Prompt</h4>
        <button className="likebutton" onClick={this.handleClick}>Random Prompt</button>
        <br></br>
        <br></br>
        <img src="https://cdn.website.thryv.com/df067c1490014b358cb79c081e2821cb/DESKTOP/png/488.png" width="200px"></img>
        <br></br>
        <br></br>
        <div className="promptcontent">{this.state.prompt.content}</div>
        <NewStoryForm history={this.props.history} prompt={this.state.prompt} />
        <button className="likebutton" onClick={() => this.props.history.push(`/users/${this.props.user.user_id}`)}>Back to Profile</button>
        <br></br>
        <br></br>
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
