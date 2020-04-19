import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col, Table } from 'react-bootstrap';
import Select from 'react-select';
import { fetchInfo } from '../actions/actions_info';

import { connect } from 'react-redux';

class App extends React.Component {

 constructor(props) {
  super(props)
  this.state = {
   selectedOption: '' 
  }
 }
 componentDidMount() {
  // console.log(this.props.dispatch);
  this.props.dispatch(fetchInfo())
 }

 componentDidUpdate() {}

 handleChange(selectedOption) {
  this.setState({
   selectedOption: selectedOption ? selectedOption : ''
  })
  console.log(selectedOption);
 }

 render() {
  const selectList = this.props.info.map(item => {
   return {
    value: item.name,
    label: item.name
   }
  })
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
    <div className="row">
     <div className="col-sm-3">
    <Select onChange={this.handleChange.bind(this)}options={selectList} />
    </div>
    </div>
    <hr/>
     <Table striped bordered hover>
   <thead>
     <tr>
       <th>#</th>
       <th>First Name</th>
       <th>Last Name</th>
       <th>Username</th>
     </tr>
   </thead>
   <tbody>
    {this.props.info.map(item=>{
     if (this.state.selectedOption==='' || item.name===this.state.selectedOption.value) {
      return (
       <tr key={"item-"+item.name}>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.age}</td>
        <td>{item.company}</td>
       </tr>
      )
     }
    })}
 
    </tbody>
 </Table>

   </div>
  );

 }
}
export default App;