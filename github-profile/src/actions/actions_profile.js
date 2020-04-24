export const PROFILE_FETCHED = 'PROFILE_FETCHED'
export const PROFILE_EDITED = 'PROFILE_EDITED'

export function fetchProfile() {
 return (dispatch) => {
  return fetch('http://localhost:8080/profile')
  .then(response => response.json())
  .then(json => {
   console.log(json);
   dispatch(loadProfile(json))
  })
  .catch(error => {
   console.log(error);
  })
 }
}

export function saveProfile(profile) {
 return (dispatch) => {
  // let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'token 89f3ce15a9071d040289ace5d0c40269c7e01073' })
  return fetch('http://localhost:8080/profile', {
  method: 'PATCH',
  headers:{
   'Content-Type': 'application/json'
  },
  body: JSON.stringify(profile)
  })
  .then(response => response.json())
  .then(json => {
   console.log(json);
   dispatch(loadProfile(json))
  })
  .catch(error => {
   console.log(error);
  })
 }
}

export function loadProfile(results) {
 return {
  type: PROFILE_FETCHED,
  payload: results
 }
}