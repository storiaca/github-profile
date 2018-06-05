import { connect } from 'react-redux';

import ProfileComponent from '../components/Profile';

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
}
   
const Profile = connect(mapStateToProps)(ProfileComponent);

export default Profile;