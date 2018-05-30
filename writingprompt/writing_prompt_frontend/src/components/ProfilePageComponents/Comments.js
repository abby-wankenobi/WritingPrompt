import React from 'react';


class Comments extends React.Component{

  render(){
    console.log(this.props)
    return(
      <div className="commentForm">
        <p className="commentTitle">{this.props.comment.title}</p>
        <h4>{this.props.comment.content}</h4>
        <br></br>
        <p size="5" onClick={() => this.props.history.push(`/users/${this.props.comment.user.id}`)}>-{this.props.comment.user.username}</p>
          <br></br>
          <img className="linebreak" src="https://cdn.website.thryv.com/df067c1490014b358cb79c081e2821cb/DESKTOP/png/488.png" width="100px"></img>
          <br></br>
      </div>
    )
  }

}

export default Comments
