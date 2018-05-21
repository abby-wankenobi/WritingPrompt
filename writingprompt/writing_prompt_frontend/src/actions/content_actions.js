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

export function setStory(story){
  return (dispatch) => {
    dispatch({type: "SET_STORY", payload: story})
  }
}
