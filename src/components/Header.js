import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
        <Link className="navbar-item" to='/'>Home</Link>
        <Link className="navbar-item" to='/pages/learn_vanilla_js'>Learn Vanilla JavaScript</Link>
  </nav>
)

export default Header;