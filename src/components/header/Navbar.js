import React, {useState} from 'react'
import { IoMdCloudDownload, IoLogoTwitter, IoLogoFacebook, IoLogoInstagram, IoMdMenu } from 'react-icons/io'

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleToggle = () =>{
    setisOpen(!isOpen);
  }

  return (
    <div className="navbar-wrapper">
      <div className="container container--navbar d-flex">
        <div className="logo body1">
          <a href="!#">Creative Tim</a>
        </div>
        <div className="responsive-bar" onClick={handleToggle}>
          <IoMdMenu style={{ width: '26px', height: '26px' }} />
        </div>
        <ul className={`nav nav--header ${!isOpen ? `nav--hidden` : ``}`}>
          <li className="nav__item small">
            <a href="!#">components</a>
          </li>
          <li className="nav__item nav__item--icon small">
            <a href="!#"><span><IoMdCloudDownload fontSize="20px" /></span> Download</a>
          </li>
          <li className="nav__item">
            <ul className="socials">
              <li className="socials__item">
                <a href="!#"> <IoLogoTwitter /> </a>
              </li>
              <li className="socials__item">
                <a href="!#"><IoLogoFacebook /></a>
              </li>
              <li className="socials__item">
                <a href="!#"><IoLogoInstagram /></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
