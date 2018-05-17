const API_URL = "http://localhost:3000"
const headers = {
  "Content-Type": "application/json"
}

export function setAuth(username, password) {
  return (dispatch) => {
    return fetch(API_URL + "/register", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({username, password})
    })
    .then(r => r.json())
    .then(userData => {
      console.log("SIGNUP", userData)
      localStorage.setItem("token", userData.jwt)
      dispatch({
        type: "SIGNUP_USER",
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

// export function setAuth(auth) {
//   return (dispatch) => {
//     dispatch({
//       type: "SET_AUTH",
//       payload: auth
//     })
//   }
// }
