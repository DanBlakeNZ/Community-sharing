import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loginUser } from '../actions'

class Login extends React.Component {
  render () {
    return (
      <div className='login'>
        <img src='http://res.cloudinary.com/hpyyiawap/image/upload/v1492507853/community_bxaesr.png' />
        <div className='LoginGreeting'>
          Welcome to Community Sharing.
          <br />
          Please sign in below.
        </div>
        <form>
          <label>Email</label><br /><input id='email-input' type='text' name='email' placeholder='example@email.com' /><br />
          <label>Password</label><br /><input id='password-input' type='password' name='password' />
            <p id='login-error-message'>{ this.props.loginFailed ? 'Login failed, please check your entered details' : ''}</p>
            <button type='button' value='Login' onClick={() => submitUser(event, this.props)}>Login</button>
        </form>
        <p>No account?</p>
        <Link to='/register' className='registerLink'>
          Register Here
        </Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    dispatch: state.dispatch,
    loginFailed: state.loginFailed
  }
}

export default connect(mapStateToProps)(Login)

function submitUser (ev, props) {
  ev.preventDefault(ev)

  document.getElementById('login-error-message').innerHTML = ''

  var validEmail = validateEmail(document.getElementById('email-input').value)
  var enteredPassword = checkPassword(document.getElementById('password-input').value)

  if (validEmail === false) {
    document.getElementById('login-error-message').innerHTML = 'The entered email is invalid, please try again.'
  }

  if ((validEmail === true) && (enteredPassword === false)) {
    document.getElementById('login-error-message').innerHTML = 'Please enter a password'
  }

  validEmail && enteredPassword ? props.dispatch(loginUser(document.getElementById('email-input').value)) : ''
}

function validateEmail (email) {
  var regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regularExpression.test(email)
}

function checkPassword (password) {
  if (password === '') {
    return false
  } else {
    return true
  }
}
