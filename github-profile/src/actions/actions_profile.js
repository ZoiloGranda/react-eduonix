export const PROFILE_FETCHED = 'PROFILE_FETCHED'
export const PROFILE_EDITED = 'PROFILE_EDITED'

export function fetchProfile() {
 return (dispatch) => {
  let header = new Headers({ 'Content-Type': 'application/json', 'Authotization': 'token fbb7734bb37f65f3f1467f64ae37051d0788d98b' })
  return fetch('https://api.github.com/users/zoilogranda', {
   method: 'GET',
   // headers: header
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