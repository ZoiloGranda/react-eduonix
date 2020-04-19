import React from 'react';

class Profile extends React.Component {
 componentDidMount() {
  let header = new Headers({ 'Content-Type': 'application/json', 'Authotization': 'token fbb7734bb37f65f3f1467f64ae37051d0788d98b' })
  fetch('https://api.github.com/users/zoilogranda', {
    method: 'GET'
   })
   .then(response => response.json())
   .then(json => {
    console.log(json);
   })
   .catch(error => {
    console.log(error);
   })
 }

 render() {
  return (
   <div>
     <p>Profile goes here</p>
    </div>
  );
 }
}

export default Profile;