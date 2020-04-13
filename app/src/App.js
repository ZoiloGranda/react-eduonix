import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameComponent from './components/NameComponent';


class App extends React.Component {
 componentDidMount(){
  console.log('mounted')
 }
 logFunction(){
  console.log('nicee')
 }
 render(){
  var array = ['welcome', 'to', 'my', 'course']
    
  return (
   <div className="App">
   <header className="App-header">
   <img src={logo} className="App-logo" alt="logo" />
   </header>
   <NameComponent></NameComponent>
   {array.map((word, index) =>{
    return (<p key={index}>{word}</p>)
   })}
   <button onClick={this.logFunction}>Press me</button>
   </div>
  );
  
 }
}

export default App;
