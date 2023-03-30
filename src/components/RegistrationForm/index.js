// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstError: false,
    lastError: false,
    succeeded: false,
  }

  submittingForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({firstError: true})
    } else {
      this.setState({firstError: false})
    }

    if (lastName === '') {
      this.setState({lastError: true})
    } else {
      this.setState({lastError: false})
    }

    if (firstName !== '' && lastName !== '') {
      this.setState({succeeded: true})
    }
  }

  onChangeFirst = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLast = event => {
    this.setState({lastName: event.target.value})
  }

  onRenderFirst = () => {
    const {firstName} = this.state

    return (
      <>
        <label className="labelEl" htmlFor="first">
          FIRST NAME
        </label>
        <input
          type="text"
          className="inpel"
          id="first"
          value={firstName}
          onChange={this.onChangeFirst}
          placeholder="First name"
        />
      </>
    )
  }

  onRenderLast = () => {
    const {lastName} = this.state

    return (
      <>
        <label className="labelEl" htmlFor="last">
          LAST NAME
        </label>
        <input
          type="text"
          className="inpel"
          id="last"
          value={lastName}
          onChange={this.onChangeLast}
          placeholder="Last name"
        />
      </>
    )
  }

  onFirstError = () => {
    const {firstName} = this.state

    return (
      <>
        <label className="labelEl" htmlFor="firstId">
          FIRST NAME
        </label>
        <input
          type="text"
          className="inpel error-inp"
          id="firstId"
          value={firstName}
          onChange={this.onChangeFirst}
          placeholder="First name"
        />
        <p className="errMsg">Required</p>
      </>
    )
  }

  onLastError = () => {
    const {lastName} = this.state

    return (
      <>
        <label className="labelEl" htmlFor="lastId">
          LAST NAME
        </label>
        <input
          type="text"
          className="inpel error-inp"
          id="lastId"
          value={lastName}
          onChange={this.onChangeLast}
          placeholder="Last name"
        />
        <p className="errMsg">Required</p>
      </>
    )
  }

  onResetting = () => {
    this.setState({
      firstName: '',
      lastName: '',
      firstError: false,
      lastError: false,
      succeeded: false,
    })
  }

  render() {
    const {firstError, lastError, succeeded} = this.state

    return (
      <div className="mainCon">
        <h1 className="mainH">Registration</h1>
        {succeeded ? (
          <div className="innerCon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="sucImg"
            />
            <p className="sucP">Submitted Successfully</p>
            <button
              className="bton sucBton"
              type="button"
              onClick={this.onResetting}
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="formEl" onSubmit={this.submittingForm}>
            <div className="firstInpCon">
              {firstError ? this.onFirstError() : this.onRenderFirst()}
            </div>
            <div className="lastInpCon">
              {lastError ? this.onLastError() : this.onRenderLast()}
            </div>
            <button type="submit" className="bton">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
