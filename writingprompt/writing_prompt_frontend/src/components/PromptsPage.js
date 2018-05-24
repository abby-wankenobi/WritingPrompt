import React from 'react';
import { connect } from 'react-redux'
import { getPrompts, getGenres } from '../actions/content_actions'
import PromptComponent from './PromptComponent'

class PromptsPage extends React.Component {

  state = {
    genre: "All Genres",
    prompts: this.props.prompts,
    filter: "Newest"
  }

  componentWillMount(){
    this.props.getPrompts()
    .then(prompts => {
      this.setState({
        prompts: this.props.prompts
      })
    })
    this.props.getGenres()
  }

  handleChange = (e) => {
    if (e.target.value !== 'All Genres') {
      this.setState({
        genre: e.target.value
      })
      let promptsGenre = this.props.prompts.filter(prompt => prompt.genre_id == e.target.value)
      this.setState({
        prompts: promptsGenre
      })
    }else{
      this.setState({
        prompts: this.props.prompts
      })
    }
  }

  handleFilterChange = (e) => {
    if (e.target.value === "Newest"){
      this.setState({
        filter: "Newest"
      })
      let newFilter = this.state.prompts.sort(function(a, b){
        var keyA = new Date(a.created_at),
            keyB = new Date(b.created_at);
          if(keyA < keyB) return -1;
          if(keyA > keyB) return 1;
          return 0
      });
      this.setState({
        prompts: newFilter
      })
    }else if (e.target.value === "Oldest"){
      this.setState({
        filter: "Oldest"
      })
      let newFilter = this.state.prompts.sort(function(a, b){
        var keyA = new Date(a.created_at),
            keyB = new Date(b.created_at);
          if(keyA < keyB) return 1;
          if(keyA > keyB) return -1;
          return 0
      });
      this.setState({
        prompts: newFilter
      })
    }else if(e.target.value === "Most Popular"){
      this.setState({
        filter: "Most Popular"
      })
      let newFilter = this.state.prompts.sort((a,b) => a.likes.length - b.likes.length)
      this.setState({
        prompts: newFilter
      })
    }else if(e.target.value === "Least Popular"){
      this.setState({
        filter: "Least Popular"
      })
      let newFilter = this.state.prompts.sort((a,b) => b.likes.length - a.likes.length)
      this.setState({
        prompts: newFilter
      })
    }
  }


  render(){
    console.log(this.props)

    let genres
    if (this.props.genres) {
      genres = this.props.genres.map(genre => <option value={genre.id}>{genre.title}</option>)
    }


    let selectedPrompts
    if (this.props.prompts) {
      selectedPrompts = this.state.prompts.map(prompt => {
        return <PromptComponent history={this.props.history} key={prompt.id} prompt={prompt} />
      })
    }

    return(
      <div className="PromptsPage">
        <h1>Prompts</h1>
        <br></br>
        <select onChange={this.handleChange}>
          <option value="All Genres">All Genres</option>
          {genres}
        </select>
        <select onChange={this.handleFilterChange}>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="Most Popular">Most Popular</option>
          <option value="LeastPopular">Least Popular</option>
        </select>
        <br></br>
        <br></br>
        <ul>
          {selectedPrompts}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    prompts: state.contentReducer.prompts,
    genres: state.contentReducer.genres
  }
}

export default connect(mapStateToProps, { getPrompts, getGenres })(PromptsPage)
