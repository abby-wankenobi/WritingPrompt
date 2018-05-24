const defaultState = {
  prompts: [],
  user_info: null,
  genres: [],
  story: null,
  prompt: null,
  stories: [],
  storylikes: []
}


export default function contentReducer (state=defaultState, action){
  switch(action.type){
    case "GET_PROMPTS":
      return {...state, prompts: action.payload}
    case "USER_INFO":
      return {...state, user_info: action.payload}
    case "GET_GENRES":
      return {...state, genres: action.payload}
    case "SET_STORY":
      return {...state, story: action.payload}
    case "SET_PROMPT":
      return {...state, prompt: action.payload}
    case "GET_STORIES":
      return {...state, stories: action.payload}
    case "ADD_COMMENT":
      return {...state, story: {...state.story, comments: [...state.story.comments, action.payload]}}
    case "SET_LIKES":
      return {...state, storylikes: action.payload}
    default:
      return state
  }
}
