import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letterCount: 0}

  countTheLetters = event => {
    const inputLength = event.target.value.replace(/[^a-zA-Z]/g, '').length
    this.setState({letterCount: inputLength})
  }

  render() {
    return (
      <div className="container">
        <div className="bg-container">
          <div className="info">
            <h1>Calculate the Letters you enter</h1>
            <label htmlFor="phraseInput" className="label">
              Enter the phrase
            </label>
            <input
              type="text"
              id="phraseInput"
              className="input"
              placeholder="Enter the phrase"
              onChange={this.countTheLetters}
            />
            <p>No. of letters: {this.state.letterCount}</p>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="img"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
