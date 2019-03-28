import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li><NavLink to='/create'>New Project</NavLink></li>
      <li><a onClick={props.signOut}>Log Out</a></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>NN</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ signOut }, dispatch)

export default connect(null, mapDispatchToProps)(SignedInLinks)