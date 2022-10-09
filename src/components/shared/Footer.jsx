import React from 'react'
import './styles/footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer__section'>
        <div className='footer__info'>
          <i className='bx bx-copyright'></i> 
          <p>Elvis Espinoza</p>
        </div>

        <div className='footer__media'>
          <a href="https://www.linkedin.com/in/elvis-alexander-espinoza-/" target="_blank">
            <i className='bx bxl-linkedin-square'></i>
          </a>
          <a href="https://github.com/3lvis-dev" target="_blank">
            <i className='bx bxl-github'></i>
          </a>
          <a href="https://www.facebook.com/Elvis.Alexander.Espinoza.Figueredo/" target="_blank">
            <i className='bx bxl-facebook-square'></i>
          </a>
          <a href="https://www.instagram.com/hypnos_insigne/" target="_blank">
            <i className='bx bxl-instagram'></i>
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer