import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import MyBorrowedDetails from './MyBorrowedDetails'
import Login from './Login'
import Navbar from './Navbar.jsx'
import Register from './Register'
import Dashboard from './Dashboard'
import SingleItem from './SingleItem'
import LenderForm from './LenderForm'
import MyItemDetails from './MyItemDetails'
import List from '../containers/List'
import TermsConditions from './TermsConditions'
import MyLoanedDetails from './MyLoanedDetails'

function App (props) {
  return (
    <div className='app-container'>
      <Navbar />
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/b-details' component={MyBorrowedDetails} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/list-item' component={SingleItem} />
          <Route path='/lender-form' component={LenderForm} />
          <Route path='/my-item-details' component={MyItemDetails} />
          <Route path='/list-all' component={List} />
          <Route path='/ts&cs' component={TermsConditions} />
          <Route path='/l-details' component={MyLoanedDetails} />
        </div>
      </Router>
    </div>
  )
}

export default App
