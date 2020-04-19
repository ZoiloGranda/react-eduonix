import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import SliderComponent from './Slider';
import Profile from './Profile';

class App extends React.Component {
 constructor(props){
  super(props);
  this.state = {
   currentTab:'profile'
  }
 }
 render(){
  return (
    <div> 
     <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">My Github Profile</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="mr-auto" >
        <Nav.Link onClick={()=> this.setState({currentTab:'slider'})}>Slider</Nav.Link>
        <Nav.Link onClick={()=> this.setState({currentTab:'profile'})}>Profile</Nav.Link>
       </Nav>
      </Navbar.Collapse>
     </Navbar>
     <div>
      {this.state.currentTab==='slider'?<SliderComponent/>:false}
      {this.state.currentTab==='profile'?<Profile/>:false}
     </div>
    </div>
  );
 }
}

export default App;