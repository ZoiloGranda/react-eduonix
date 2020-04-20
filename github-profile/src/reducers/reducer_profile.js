import { PROFILE_FETCHED, PROFILE_EDITED } from '../actions/actions_profile.js'
//PROFILE_EDITED NO SE USA, ES UN EJEMPLO
const profile = (state = {}, action) => {
 switch (action.type) {
  case PROFILE_FETCHED:
   return action.payload
  case PROFILE_EDITED:
  let newState = JSON.parse(JSON.stringify(state))
  newState = replaceProfile(newState, action.payload)
   return action.payload
  default:
   return state

 }
}

export default profile;

function replaceProfile(profiles, newProfile) {
 let newProfiles =[]
 profiles.forEach((thisProfile) => {
  if (thisProfile.name===newProfile.name) {
   newProfiles.push(profile)
  }else {
   newProfiles.push(thisProfile)
  }
  
 });
 return newProfiles
}