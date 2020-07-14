import React from 'react'
import { IoMdHeart } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container container--footer">
        <ul className="nav nav--footer mb-0x-lg">
          <li className="nav__item small ml-0x">
            <a href="!#">creative</a>
          </li>
          <li className="nav__item small">
            <a href="!#">about us</a>
          </li>
          <li className="nav__item small">
            <a href="!#">blog</a>
          </li>
          <li className="nav__item small">
            <a href="!#">licenses</a>
          </li>
        </ul>
        <p className="text-center small">
          &copy; 2016, made with <IoMdHeart size={'13px'} style={{ position: 'relative', top: '2px' }} /> by Creative Tim
				</p>
      </div>
    </footer>
  )
}

export default Footer
