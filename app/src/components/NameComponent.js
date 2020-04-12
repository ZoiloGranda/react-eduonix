import React from 'react';

class NameComponent extends React.Component {
 componentDidMount(){
  console.log('mounted')
 }
 render(){
  return (
   <div>
   <p>Zoilo</p>
   </div>
  );
  
 }
}

export default NameComponent;
