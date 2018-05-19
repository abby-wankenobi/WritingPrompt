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
