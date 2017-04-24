import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class LoginWelcome extends React.Component {
  render () {
    return (
      <div className='login-welcome-container'>

        <p>Welcome, you are now logged in and are able to lend and share items with other in your community.</p>
        <br />
        <Link to='/lender-form'>
          Lend an Item
        </Link>
        <br />
        <Link to='/list-all'>
          Borrow and Item
        </Link>
        <br />
        <Link to='/dashboard'>
          Your Dashboard
        </Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    dispatch: state.dispatch,
    loggedInUserDetails: state.loggedInUserDetails
  }
}

export default connect(mapStateToProps)(LoginWelcome)
