import React from 'react';
import { connect } from 'react-redux'
import { getPrompts, getStories } from '../actions/content_actions'
import PromptComponent from './PromptComponent'
import StoryComponent from './StoryComponent'

class HomePage extends React.Component {

//   componentWillMount(){
//     this.props.getPrompts()
//     this.props.getStories()
//   }
//
//
//   render(){
//     console.log(this.props.prompts)
//     let allPrompts
//     if (this.props.prompts.length > 0) {
//       allPrompts = this.props.prompts.map(prompt => {
//         return <PromptComponent history={this.props.history} key={prompt.id} prompt={prompt} />
//       })
//     }
//
//     let allStories
//     if (this.props.stories.length > 0) {
//       allStories = this.props.stories.map(story => {
//         return <StoryComponent history={this.props.history} key={story.id} story={story} />
//       })
//     }
//
//     return(
//       <div className="HomePage">
//         <h1>Prompts</h1>
//         <br></br>
//         <ul>
//           {allPrompts}
//         </ul>
//         <br></br>
//         <h1>Stories</h1>
//         <br></br>
//         <ul>
//           {allStories}
//         </ul>
//       </div>
//     )
//   }
// }
//
// function mapStateToProps(state) {
//   return {
//     prompts: state.contentReducer.prompts,
//     stories: state.contentReducer.stories
//   }
// }

// export default connect(mapStateToProps, { getPrompts, getStories })(HomePage)
