const defaultState = {
  prompts: []
}


export default function contentReducer (state=defaultState, action){
  switch(action.type){
    case "GET_PROMPTS":
      return {...state, prompts: [...state.prompts, action.payload]}
    default:
      return state
  }
}
