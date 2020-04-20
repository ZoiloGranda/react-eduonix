import{ connect } from 'react-redux';
import SliderComponent from '../components/Slider';

const mapStateToProps = state =>{
 return {
  profile:state.profile
 }
}

const SliderContainer = connect(
 mapStateToProps
)(SliderComponent);

export default SliderContainer;