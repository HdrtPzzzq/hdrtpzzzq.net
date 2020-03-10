import React, { Component } from 'react';
import avatar from '../images/mrpokeylope.png'
console.log(avatar);
class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="pseudo">
        HdrtPzzzq
        </div>
        <div className="avatar">
          <img src={avatar} alt="hdrtpzzzq_avatar"/>
        </div>
      </div>
    )
  }
}
export default HomePage;
