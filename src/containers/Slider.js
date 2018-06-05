import { connect } from 'react-redux';

import ProfileComponent from '../components/SliderComponent';

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
}
   
const Slider = connect(mapStateToProps)(ProfileComponent);

export default Slider;