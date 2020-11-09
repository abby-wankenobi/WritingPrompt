const API_URL = "https://wp-backend.herokuapp.com"


export function getPrompts(){
  return (dispatch) => {
    return fetch(API_URL + "/prompts")
    .then(res => res.json())
    .then(prompts => {
      dispatch({type: "GET_PROMPTS", payload: prompts})
    })
  }
}

export function getUserInfo(id){
  return (dispatch) => {
    return fetch(API_URL + `/users/${id}`)
    .then(res => {
        if( res.ok ) res.json();
        else throw new  Error('Something went wrong');
    })
    .then(user => {
      dispatch({type: "USER_INFO", payload: user})
    })
    .catch( error => console.log(error))
  }
}

export function getGenres(){
  return (dispatch) => {
    return fetch(API_URL + "/genres")
    .then(res => res.json())
    .then(genres => {
      dispatch({type: "GET_GENRES", payload: genres})
    })
  }
}

export function getStories(){
  return (dispatch) => {
    return fetch(API_URL + "/stories")
    .then(res => {
        if( res.ok ) res.json();
        else throw new  Error('Something went wrong');
    })
    .then(stories => {
      dispatch({type: "GET_STORIES", payload: stories})
    })
    .catch( error => console.log(error))
  }
}

export function getLikes(auth){
  return (dispatch) => {
    return fetch(API_URL + "/storylikes", {
      headers: {"Authorization": `Token token=${ auth.token }`}
    })
    .then(res => {
        if( res.ok ) res.json();
        else throw new  Error('Something went wrong');
    })
    .then(storylikes => {
      dispatch({type: "SET_LIKES", payload: storylikes})
    })
    .catch( error => console.log(error))
  }
}

export function getPromptLikes(auth){
  return (dispatch) => {
    return fetch(API_URL + "/promptlikes", {
      headers: {"Authorization": `Token token=${ auth.token }`}
    })
    .then(res => {
        if( res.ok ) res.json();
        else throw new  Error('Something went wrong');
    })
    .then(promptlike => {
      dispatch({type: "SET_PROMPTLIKES", payload: promptlike})
    })
    .catch( error => console.log(error))
  }
}

export function deleteLike(id){
  return (dispatch) => {
    dispatch({type: "DELETE_LIKE", payload: id})
  }
}

export function addLike(like){
  return (dispatch) => {
    dispatch({type: "ADD_LIKE", payload: like})
  }
}

export function addPromptLike(like){
  return(dispatch) => {
    dispatch({type: "ADD_PROMPTLIKE", payload: like})
  }
}

export function deletePromptLike(id){
  return (dispatch) => {
    dispatch({type: "DELETE_PROMPTLIKE", payload: id})
  }
}

export function setStory(story){
  return (dispatch) => {
    dispatch({type: "SET_STORY", payload: story})
  }
}

export function setPrompt(prompt){
  return (dispatch) => {
    dispatch({type: "SET_PROMPT", payload: prompt})
  }
}

export function addComment(comment){
  return (dispatch) => {
    dispatch({type: "ADD_COMMENT", payload: comment})
  }
}
