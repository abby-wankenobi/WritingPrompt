import React from 'react';
import { connect } from 'react-redux'
import { getPrompts, setStory } from '../actions/content_actions'

class NewStoryForm extends React.Component {

  state = {
    prompt: this.props.prompt,
    title: "",
    story: ""
  }

  handleTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("https://wp-backend.herokuapp.com/stories", {
      method: "POST",
      headers: {
        "Authorization": `Token token=${ this.props.user.token }`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify ({
        story: {
          user_id: this.props.user.user_id,
          prompt_id: this.props.prompt.id,
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


console.log(this.props)
    return(
      <div className="NewStory">
        <form onChange={this.handleTextChange}>
          <input className="storytitle" name="title" placeholder=" Title" />
          <br></br>
          <textarea className="inputfield" name="content" placeholder=" Write your story..." rows="30" cols="50"/>
          <br></br>
          <button onClick={this.handleSubmit} className="likebutton">Save Story</button>
          <br></br>
          <br></br>
        </form>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    prompts: state.contentReducer.prompts,
    user: state.mainReducer.auth
  }
}

export default connect(mapStateToProps, { getPrompts, setStory })(NewStoryForm)
