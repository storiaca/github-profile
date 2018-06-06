import { PROFILE_FETCHED, PROFILE_EDITED } from '../actions/actions_profile';

const profile = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_FETCHED:
      return action.payload
    case PROFILE_EDITED:
      let newState = JSON.parse(JSON.stringify(state));
      newState = replaceProfile(newState, action.payload)
      return newState
    default:
      return state
  }
}

export default profile;

function replaceProfile(profiles, newProfile) {
  const newProfiles = [];
  profiles.forEach(function(thisProfile){
    if(thisProfile.name === newProfile.name) {
      newProfiles.push(newProfile);
    } else {
      newProfiles.push(thisProfile);
    }
  })
}

