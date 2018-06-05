export const PROFILE_FETCHED = 'PROFILE_FETCHED';
export const PROFILE_EDITED = 'PROFILE_EDITED';

export function fetchProfile() {
  return(dispatch) => {
		let header = new Headers({"Content-Type":"application/json", "Authorization": "token 07c9e85a1b14af32eee95de31fc34a8143ce4c35"});
		return fetch('https://api.github.com/users/storiaca', {
			method: 'GET',
			headers: header
    })
    .then(response => response.json())
    .then(json => {
			console.log(json);
			dispatch(loadProfile(json))
    })
    .catch(error => console.log(error));
	}
}

export function loadProfile(results) {
	return {
		type: PROFILE_FETCHED,
		payload: results
	}
}