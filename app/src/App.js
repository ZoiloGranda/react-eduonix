import React from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import Select from 'react-select';

const options = [
 { value: 'chocolate', label: 'Chocolate' },
 { value: 'strawberry', label: 'Strawberry' },
 { value: 'vanilla', label: 'Vanilla' }
]

class App extends React.Component {
 
 constructor(props) {
  super(props)
  this.state = {
   selectedOption:''
  }
 }
 componentDidMount() {
  console.log('mounted')
 }
 
 componentDidUpdate() {
  console.log('update')
 }
 
 handleChange(selectedOption){
  this.setState({
   selectedOption:selectedOption?selectedOption:''
  })
  console.log(selectedOption);
 }
 
 render() {
  return (
   <div>
    <Navbar bg="light" expand="lg">
     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
       <Nav.Link href="#home">Home</Nav.Link>
       <Nav.Link href="#link">Link</Nav.Link>
       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
       </NavDropdown>
      </Nav>
      <Form inline>
       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
       <Button variant="outline-success">Search</Button>
      </Form>
     </Navbar.Collapse>
    </Navbar>
    <Container>
     <Row>
      <Col>1 of 1</Col>
     </Row>
    </Container>
    <Select onChange={this.handleChange.bind(this)}options={options} />
   </div>
  );
  
 }
}

export default App;