const defaultState = {
  auth: null
}

export default function mainReducer (state=defaultState, action){
  switch(action.type){
    case "LOGIN_USER":
      return {
        ...state, auth: action.payload
      }
    case "SAVE_AUTH":
      return {
        ...state, auth: action.payload
      }
    case "LOGOUT":
      return defaultState
    default:
      return state
  }
}
