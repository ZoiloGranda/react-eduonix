import React from 'react';
import { Form, Button } from 'react-bootstrap';

class Profile extends React.Component {
 constructor(props){
  super(props);
  this.state ={
   userInfo:{},
   editing: false
  }
 }
 
 componentDidMount() {
  let header = new Headers({ 'Content-Type': 'application/json', 'Authotization': 'token fbb7734bb37f65f3f1467f64ae37051d0788d98b' })
  fetch('https://api.github.com/users/zoilogranda', {
   method: 'GET'
  })
  .then(response => response.json())
  .then(json => {
   console.log(json);
   this.setState({
    userInfo: json
   })
  })
  .catch(error => {
   console.log(error);
  })
 }
 
 updateValue(type, event){
  let userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo))
  userInfoCopy[type] = event.target.value
  this.setState({
   userInfo:userInfoCopy
  })
 }
 
 render() {
  return (
   <div className="container mt-2">
    <Button variant="primary" onClick={()=>this.setState({editing:!this.state.editing})}>Edit</Button>{' '}
     <hr/>
    {this.state.editing ?
     <div>
    <Form.Group>
     <Form.Label>Name</Form.Label>
     <Form.Control 
      onChange={this.updateValue.bind(this,'name')} 
      value={this.state.userInfo.name} 
      type="text" 
      placeholder="Enter Name" />
    </Form.Group>
    <Form.Group>
     <Form.Label>Bio</Form.Label>
     <Form.Control 
      onChange={this.updateValue.bind(this, 'bio')} 
      value={this.state.userInfo.bio} 
      type="text" 
      placeholder="Enter Name" />
    </Form.Group>
    <Form.Group>
     <Form.Label>Location</Form.Label>
     <Form.Control 
      onChange={this.updateValue.bind(this, 'location')} 
      value={this.state.userInfo.location} 
      type="text" 
      placeholder="Enter Name" />
    </Form.Group>
    <Form.Group>
     <Form.Label>Company</Form.Label>
     <Form.Control 
      onChange={this.updateValue.bind(this, 'company')} 
      value={this.state.userInfo.company} 
      type="text" 
      placeholder="Enter Name" />
    </Form.Group>
    </div>
    :
    <div>
     <p><strong>Name: </strong>{this.state.userInfo.name} </p>
     <p><strong>Bio: </strong>{this.state.userInfo.bio} </p>
     <p><strong>Location: </strong>{this.state.userInfo.location} </p>
     <p><strong>Company: </strong>{this.state.userInfo.company} </p>
    </div>
   }
   </div>
  );
 }
}

export default Profile;