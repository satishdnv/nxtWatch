import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const imageUrlLight =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const imageUrlDark =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class LoginRoute extends Component {
  state = {
    isChecked: false,
    username: '',
    password: '',
    showErrorMsg: '',
    isShowMsg: false,
  }

  changeUserName = event => {
    this.setState({username: event.target.value, isShowMsg: false})
  }

  changePassword = event => {
    this.setState({password: event.target.value, isShowMsg: false})
  }

  showAndHidePassword = () => {
    this.setState(pre => ({
      isChecked: !pre.isChecked,
    }))
  }

  onSuccess = data => {
    const {history} = this.props
    const jwtToken = data.jwt_token
    console.log(jwtToken)
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailure = data => {
    const errorMsg = data.error_msg
    this.setState({
      showErrorMsg: errorMsg,
      isShowMsg: true,
      username: '',
      password: '',
    })
    console.log(errorMsg)
  }

  submitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    console.log(userDetails)
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    console.log(response)
    const data = await response.json()
    // console.log(data)

    if (response.ok === true) {
      this.onSuccess(data)
    } else {
      this.onFailure(data)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const {
            username,
            password,
            isChecked,
            showErrorMsg,
            isShowMsg,
          } = this.state

          const passwordControl = isChecked ? 'text' : 'password'
          const themeValue = isDark
            ? 'login-container-black'
            : 'login-container'
          const imageUrl = isDark ? imageUrlDark : imageUrlLight

          const formClass = isDark ? 'form-container2' : 'form-container'

          return (
            <div className={themeValue}>
              <form className={formClass} onSubmit={this.submitLoginForm}>
                <img src={imageUrl} className="image" alt="nextLogo" />
                <label className="label-class" htmlFor="userName">
                  USERNAME
                </label>
                <input
                  placeholder="Username"
                  className="input-element"
                  type="text"
                  id="userName"
                  onChange={this.changeUserName}
                  value={username}
                />
                <label className="label-class" htmlFor="password">
                  PASSWORD
                </label>
                <input
                  placeholder="Password"
                  className="input-element"
                  type={passwordControl}
                  id="password"
                  onChange={this.changePassword}
                  value={password}
                />
                <div className="check-box-container">
                  <input
                    className="check-box"
                    type="checkbox"
                    id="showPassword"
                    onChange={this.showAndHidePassword}
                  />
                  <label className="check-box-label" htmlFor="showPassword">
                    Show Password
                  </label>
                </div>

                <button type="submit" className="btn">
                  Login
                </button>
                {isShowMsg && (
                  <span className="error-msg">*{showErrorMsg}</span>
                )}
              </form>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginRoute
