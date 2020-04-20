import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class SliderComponent extends React.Component {

 render() {
  const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1
  };
  return (
   <div>
    <h2> Single Item</h2>
    <Slider {...settings}>
     <div>
      <h3>{this.props.profile.name}</h3>
     </div>
     <div>
      <img alt="My Avatar"src={this.props.profile.avatar_url}/>
     </div>
     <div>
      <h3>{this.props.profile.bio}</h3>
     </div>
     <div>
      <h3>{this.props.profile.location}</h3>
     </div>
    </Slider>
   </div>
  );
 }
}

export default SliderComponent;