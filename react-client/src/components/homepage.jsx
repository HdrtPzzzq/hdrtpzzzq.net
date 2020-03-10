import React, { Component } from 'react';
import avatar from '../images/mrpokeylope.png'
import {ReactComponent as github_logo} from '../images/github.svg'
console.log(avatar);
console.log(github_logo);
class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="pseudo">
        HdrtPzzzq
        </div>
        <img src={avatar} alt="hdrtpzzzq_avatar" className="avatar"/>
      </div>
    )
  }
}
export default HomePage;
