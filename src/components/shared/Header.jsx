import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
  return (
    <header className='header'>
      <section className='header__section'>

        <div className='header__img'>
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            <img src="/img/react.svg" alt="img logo react" />
          </a>
        </div>

        <div className='header__info'>
          <Link to='/' >
            <p>Home</p>
          </Link>
          <p>Users CRUD</p>
        </div>

        <div className='header__img'>
          <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
            <img src="/img/python-logo.png" alt="img logo python" />
          </a>
        </div>

      </section>
    </header>
  )
}

export default Header