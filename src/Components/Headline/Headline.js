import React from 'react'

import { Link, withRouter } from 'react-router-dom'

import './Headline.css'

const Headline = (props) => {
  let suffix = ''
  const currentPath = props.location.pathname
  if (currentPath !== '/') {
    suffix = currentPath
  }
  
  return (
    <div className='Headline'>
      <Link to='/'>dantran.fr</Link>{suffix}
    </div>
  )
}

export default withRouter(Headline)
