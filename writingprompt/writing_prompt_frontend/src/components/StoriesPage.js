import React from 'react';
import { connect } from 'react-redux'
import { getStories, getGenres } from '../actions/content_actions'
import StoryComponent from './StoryComponent'

class StoriesPage extends React.Component {

  state = {
    genre: "All Genres",
    stories: this.props.stories,
    filter: "Newest"
  }

  componentWillMount(){
    this.props.getStories()
    .then(stories => {
      this.setState({
        stories: this.props.stories
      })
    })
    this.props.getGenres()
  }

  handleChange = (e) => {
    if (e.target.value !== 'All Genres') {
      this.setState({
        genre: e.target.value
      })
      let storiesGenre = this.props.stories.filter(story => story.genre.id == e.target.value)
      this.setState({
        stories: storiesGenre
      })
    }else{
      this.setState({
        stories: this.props.stories
      })
    }
  }

  handleFilterChange = (e) => {
    if (e.target.value === "Newest"){
      this.setState({
        filter: "Newest"
      })
      let newFilter = this.state.stories.sort(function(a, b){
        var keyA = new Date(a.created_at),
            keyB = new Date(b.created_at);
          if(keyA < keyB) return -1;
          if(keyA > keyB) return 1;
          return 0
      });
      this.setState({
        stories: newFilter
      })
    }else if (e.target.value === "Oldest"){
      this.setState({
        filter: "Oldest"
      })
      let newFilter = this.state.stories.sort(function(a, b){
        var keyA = new Date(a.created_at),
            keyB = new Date(b.created_at);
          if(keyA < keyB) return 1;
          if(keyA > keyB) return -1;
          return 0
      });
      this.setState({
        stories: newFilter
      })
    }else if(e.target.value === "Most Popular"){
      this.setState({
        filter: "Most Popular"
      })
      let newFilter = this.state.stories.sort((a,b) => b.likes.length - a.likes.length)
      this.setState({
        stories: newFilter
      })
    }else if(e.target.value === "Least Popular"){
      this.setState({
        filter: "Least Popular"
      })
      let newFilter = this.state.stories.sort((a,b) => a.likes.length - b.likes.length)
      this.setState({
        stories: newFilter
      })
    }
  }


  render(){
    console.log(this.props)

    let genres
    if (this.props.genres) {
      genres = this.props.genres.map(genre => <option value={genre.id}>{genre.title}</option>)
    }


    let allStories
    if (this.props.stories) {
      allStories = this.state.stories.map(story => {
        return <StoryComponent history={this.props.history} key={story.id} story={story} />
      })
    }

    return(
      <div className="PromptsPage">
        <h1>Stories</h1>
        <br></br>
        <div className="genreSelect">
          <select onChange={this.handleChange}>
            <option value="All Genres">All Genres</option>
            {genres}
          </select>
        </div>
        <br></br>
        <div className="sortSelect">
          <select onChange={this.handleFilterChange}>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="Most Popular">Most Popular</option>
            <option value="Least Popular">Least Popular</option>
          </select>
        </div>
        <br></br>
        <br></br>
        <div>
          {allStories}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stories: state.contentReducer.stories,
    genres: state.contentReducer.genres
  }
}

export default connect(mapStateToProps, { getStories, getGenres })(StoriesPage)
