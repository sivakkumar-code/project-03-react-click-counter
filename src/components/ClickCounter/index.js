import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log('working...', `${prevState}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">
            The Button has been clicked <span className="count">{count} </span>
            times
          </h1>
          <p className="para">Click the count to increase the count!</p>
          <button onClick={this.onIncrement} className="button" type="button">
            Click me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
