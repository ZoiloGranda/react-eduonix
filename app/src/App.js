import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameComponent from './components/NameComponent';


class App extends React.Component {
 
 constructor(props){
  super(props)
  this.handleClick = this.handleClick.bind(this)
  this.state ={
   user_name: 'Pedro',
   profession: 'Developer'
  }
 }
 componentDidMount(){
  console.log('mounted')
 }
 handleClick(){
  this.setState({
   user_name: 'Pablo Chirinos',
   profession: 'Designer'
  })
 }
 render(){
  const {user_name, profession}= this.state;
  return (
   <div className="App">
   <header className="App-header">
   <img src={logo} className="App-logo" alt="logo" />
   </header>
   <NameComponent user_name={this.state.user_name}/>
   <p>{user_name} {profession}</p>
   <button onClick={this.handleClick.bind(this)}>
   <NameComponent/>
   </button>
   </div>
  );
  
 }
}

export default App;
