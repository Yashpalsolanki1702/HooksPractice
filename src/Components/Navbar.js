import React from 'react'           //enter rfc template will come
import propTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div>
      <nav>
      <li>Home</li>
      <li>About +{props.subtitle}</li>
      <li>Contact -{props.title}</li>
    </nav>
    <div className="">
      Hello {}
    </div>
    </div>
  )
}

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    subtitle: propTypes.string
}

Navbar.defaultProps = {
    title: 'set default title',
    subtitle: 'ok',
}