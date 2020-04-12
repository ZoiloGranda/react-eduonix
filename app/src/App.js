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
  var arrayToRender = [];
  array.forEach((word, index) => {
   arrayToRender.push(<p key={index}>{word}</p>)
  });
  
  return (
   <div className="App">
   <header className="App-header">
   <img src={logo} className="App-logo" alt="logo" />
   </header>
   <NameComponent></NameComponent>
   {arrayToRender}
   <button onClick={this.logFunction}>Press me</button>
   </div>
  );
  
 }
}

export default App;
