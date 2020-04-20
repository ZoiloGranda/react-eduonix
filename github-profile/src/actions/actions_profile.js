export const PROFILE_FETCHED = 'PROFILE_FETCHED'
export const PROFILE_EDITED = 'PROFILE_EDITED'

export function fetchProfile() {
 return (dispatch) => {
  let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'token 00d54000c1f9bd386a1bf88bfb6cada6f487d79f' })
  return fetch('https://api.github.com/users/zoilogranda', {
   method: 'GET',
   headers:headers
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

export function saveProfile(profile) {
 return (dispatch) => {
  let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'token 89f3ce15a9071d040289ace5d0c40269c7e01073' })
  return fetch('https://api.github.com/user', {
   method: 'PATCH',
   headers: headers,
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