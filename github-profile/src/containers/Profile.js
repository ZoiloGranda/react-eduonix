import{ connect } from 'react-redux';
import { fetchProfile} from '../actions/actions_profile';
import ProfileComponent from '../components/Profile';

const mapStateToProps = state =>{
 return {
  profile:state.profile
 }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
 return {
  fetchProfile:()=>{
   dispatch(fetchProfile())
  }
 }
}

const Profile = connect(
 mapStateToProps,
 mapDispatchToProps
)(ProfileComponent);

export default Profile;