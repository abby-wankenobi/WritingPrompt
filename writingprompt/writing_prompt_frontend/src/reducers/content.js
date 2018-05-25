const defaultState = {
  prompts: [],
  user_info: null,
  genres: [],
  story: null,
  prompt: null,
  stories: [],
  storylikes: [],
  promptLikes: []
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
    case "SET_PROMPTLIKES":
      return {...state, promptLikes: action.payload}
    case "DELETE_LIKE":
      const storyLikes = state.storylikes.filter(like => like.id !== action.payload)
      const allStoryLikes = state.story.likes.filter(like => like.id !== action.payload)
      return {...state, storylikes: storyLikes, story: {...state.story, likes: allStoryLikes}}
    case "ADD_LIKE":
      return {...state, storylikes: [...state.storylikes, action.payload], story: {...state.story, likes: [...state.story.likes, action.payload]}}
    case "ADD_PROMPTLIKE":
      return {...state, promptLikes: [...state.promptLikes, action.payload], prompt: {...state.prompt, likes: [...state.prompt.likes, action.payload]}}
    case "DELETE_PROMPTLIKE":
      const likes = state.promptLikes.filter(like => like.id !== action.payload)
      const allLikes = state.prompt.likes.filter(like => like.id !==action.payload)
      return {...state, promptLikes: likes, prompt: {...state.prompt, likes: allLikes}}
    default:
      return state
  }
}
