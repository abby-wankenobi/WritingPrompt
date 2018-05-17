const defaultState = {
  auth: null
}

export default function mainReducer (state=defaultState, action){
  switch(action.type){
    case "SIGNUP_USER":
      return {
        ...state, auth: action.payload
      }
    case "LOGIN_USER":
      return {
        ...state, currentUser: action.payload
      }
    default:
      return state
  }
}
