const API_URL = "http://localhost:3000"


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
    .then(res => res.json())
    .then(user => {
      dispatch({type: "USER_INFO", payload: user})
    })
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
    .then(res => res.json())
    .then(stories => {
      dispatch({type: "GET_STORIES", payload: stories})
    })
  }
}

export function getLikes(auth){
  return (dispatch) => {
    return fetch(API_URL + "/storylikes", {
      headers: {"Authorization": `Token token=${ auth.token }`}
    })
    .then(r => r.json())
    .then(storylikes => {
      dispatch({type: "SET_LIKES", payload: storylikes})
    })
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
