const API_URL = "http://localhost:3000"
const headers = {
  "Content-Type": "application/json"
}

export function setAuth(username, password, bio) {
  return (dispatch) => {
    return fetch(API_URL + "/users", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({username, password, bio})
    })
    .then(r => r.json())
    .then(userData => {
      console.log("SIGNUP", userData)
      localStorage.setItem("auth", JSON.stringify(userData))
      dispatch({
        type: "LOGIN_USER",
        payload: userData
      })
    })
  }
}

export function getUser() {
  const token = localStorage.getItem("token")
  return (dispatch) => {
    return fetch(API_URL + "/get_user", {
      headers: {
        "Authorization": token
      }
    })
    .then(r => r.json())
    .then(userData => {
      dispatch({
        type: "LOGIN_USER",
        payload: userData
      })
    })
  }
}

export function login(username, password){
  return (dispatch) => {
    return fetch(API_URL + "/sessions", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({username, password})
    })
    .then(r => r.json())
    .then(userData => {
      console.log("LOGGING IN", userData)

      if (!userData.error){
        localStorage.setItem("auth", JSON.stringify(userData))
        dispatch({
          type: "LOGIN_USER",
          payload: userData
        })
      } else {
        alert("Nope")
      }
    })
  }
}

export function logout(){
  localStorage.removeItem("auth")
  return {
    type: "LOGOUT"
  }
}

export function saveAuth(auth) {
  return (dispatch) => {
    dispatch({
      type: "SAVE_AUTH",
      payload: auth
    })
  }
}
