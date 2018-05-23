import React from 'react';


class Comments extends React.Component{

  render(){
    console.log(this.props)
    return(
      <div>
        <h3>{this.props.comment.title}</h3>
        <h5>{this.props.comment.content}</h5>
        <br></br>
      </div>
    )
  }

}

export default Comments
