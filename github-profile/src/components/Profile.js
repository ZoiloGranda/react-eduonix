import React from 'react';
import { Form, Button } from 'react-bootstrap';

class Profile extends React.Component {
 constructor(props){
  super(props);
  this.state ={
   userInfo: this.props.profile,
   editing: false,
   error: false
  }
 }
 
 componentDidMount() {
  this.props.fetchProfile()
 }
 
 componentWillReceiveProps(nextProps){
  this.setState({
   userInfo:nextProps.profile
  })
 }
 
 updateValue(type, event){
  let userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo))
  userInfoCopy[type] = event.target.value
  this.setState({
   userInfo:userInfoCopy
  })
 }
 
 saveProfile(){
  let error = false;
  let propertiesToCheck =['name','bio', 'location', 'company']
  propertiesToCheck.forEach(function (term) {
   if (this.state.userInfo[term]==='') {
    error=true
   }
  }.bind(this))
  if (!error) {
   this.props.saveProfile(this.state.userInfo)
  }
  this.setState({error})
 }
 
 render() {
  return (
   <div className="container mt-2">
    <Button variant="primary" onClick={()=>this.setState({editing:!this.state.editing})}>Edit</Button>{' '}
     <hr/>
     {this.state.editing ?
      <React.Fragment>
       <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
         className={this.state.error&&this.state.userInfo.name===''?'red-border':''}
         onChange={this.updateValue.bind(this,'name')} 
         value={this.state.userInfo.name} 
         type="text" 
         placeholder="Enter Name" />
       </Form.Group>
       <Form.Group>
        <Form.Label>Bio</Form.Label>
        <Form.Control
         className={this.state.error&&this.state.userInfo.bio===''?'red-border':''}
         onChange={this.updateValue.bind(this, 'bio')} 
         value={this.state.userInfo.bio} 
         type="text" 
         placeholder="Enter Name" />
       </Form.Group>
       <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
         className={this.state.error&&this.state.userInfo.location===''?'red-border':''}
         onChange={this.updateValue.bind(this, 'location')} 
         value={this.state.userInfo.location} 
         type="text" 
         placeholder="Enter Name" />
       </Form.Group>
       <Form.Group>
        <Form.Label>Company</Form.Label>
        <Form.Control
         className={this.state.error&&this.state.userInfo.company===''?'red-border':''}
         onChange={this.updateValue.bind(this, 'company')} 
         value={this.state.userInfo.company} 
         type="text" 
         placeholder="Enter Name" />
       </Form.Group>
       <Button variant="info" onClick={this.saveProfile.bind(this)}>Save</Button>{' '}
      </React.Fragment>
      :
      <React.Fragment>
       <p><strong>Name: </strong>{this.state.userInfo.name} </p>
       <p><strong>Bio: </strong>{this.state.userInfo.bio} </p>
       <p><strong>Location: </strong>{this.state.userInfo.location} </p>
       <p><strong>Company: </strong>{this.state.userInfo.company} </p>
      </React.Fragment>
     }
    </div>
   );
  }
 }
 
 export default Profile;