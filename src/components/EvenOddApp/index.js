// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNum = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNum = this.getRandomNum()

    this.setState(prevState => ({count: prevState.count + randomNum}))

    console.log(randomNum)
  }

  render() {
    const {count} = this.state

    let status
    if (count % 2 === 0) {
      status = 'Even'
    } else {
      status = 'Odd'
    }

    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph-even">Count is {status}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="paragraph">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
