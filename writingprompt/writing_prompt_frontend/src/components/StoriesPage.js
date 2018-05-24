import React from 'react';
import { connect } from 'react-redux'
import { getStories } from '../actions/content_actions'
import StoryComponent from './StoryComponent'

class StoriesPage extends React.Component {

  componentWillMount(){
    this.props.getStories()
  }


  render(){
    console.log(this.props.prompts)

    let allStories
    if (this.props.stories.length > 0) {
      allStories = this.props.stories.map(story => {
        return <StoryComponent history={this.props.history} key={story.id} story={story} />
      })
    }

    return(
      <div className="StoriesPage">
        <h1>Stories</h1>
        <br></br>
        <ul>
          {allStories}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stories: state.contentReducer.stories
  }
}

export default connect(mapStateToProps, { getStories })(StoriesPage)
