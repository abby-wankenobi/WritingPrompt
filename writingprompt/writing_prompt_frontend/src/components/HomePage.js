import React from 'react';
import { connect } from 'react-redux'
import { getPrompts } from '../actions/content_actions'
import PromptComponent from './PromptComponent'

class HomePage extends React.Component {

  componentWillMount(){
    this.props.getPrompts()
  }


  render(){
    console.log(this.props.prompts)
    let allPrompts
    if (this.props.prompts.length > 0) {
      allPrompts = this.props.prompts[0].map(prompt => {
        return <PromptComponent key={prompt.id} prompt={prompt} />
      })
    }
    return(
      <div>
        <h1>Prompts</h1>
        <br></br>
        <ul>
          {allPrompts}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    prompts: state.contentReducer.prompts
  }
}

export default connect(mapStateToProps, { getPrompts})(HomePage)
