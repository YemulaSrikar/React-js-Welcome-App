// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  onClicked = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  getButton = () => {
    const {isClicked} = this.state
    return isClicked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButton()

    return (
      <div className="cont">
        <h1 className="welcome-text">Welcome</h1>
        <p className="tqu-text">Thank You! Happy Learning</p>
        <button className="sub-button" type="button" onClick={this.onClicked}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
