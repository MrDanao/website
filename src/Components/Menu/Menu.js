import React from 'react'

import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'

import './Menu.css'

const Menu = (props) => {
  if (props.location.pathname === '/') {
    return (
      <div className='Menu'>
        <ul>
          <li>
            <a href='https://www.linkedin.com/in/dan-tran' rel='noreferrer' target='_blank'>
              LinkedIn
            </a>
            <FontAwesomeIcon className='MenuIcon' icon={faLinkedin} />
          </li>
          <li>
            <a href='https://github.com/MrDanao' rel='noreferrer' target='_blank'>
              GitHub
            </a>
            <FontAwesomeIcon className='MenuIcon' icon={faGithub} />
          </li>
          <li>
            <Link to='/music'>
              Music
            </Link>
            <FontAwesomeIcon className='MenuIcon' icon={faPlayCircle} />
          </li>
        </ul>
      </div>
    )
  } else {
    return null
  }
}

export default withRouter(Menu)
