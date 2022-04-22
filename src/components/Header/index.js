import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import 'reactjs-popup/dist/index.css'

import './index.css'

const Header = () => (
  <nav className="header">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button
          className="hamburger-button"
          type="button"
          testid="hamburgerIconButton"
        >
          <GiHamburgerMenu size="30" />
        </button>
      }
      className="popup-cont"
    >
      {close => (
        <>
          <div className="modal-container">
            <button
              type="button"
              testid="closeButton"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="list-items">
              <li className="items">
                <Link to="/" className="web-link" onClick={() => close()}>
                  <AiFillHome size="36" />
                  <p className="link-name">Home</p>
                </Link>
              </li>
              <li className="items">
                <Link to="/about" className="web-link" onClick={() => close()}>
                  <BsInfoCircleFill size="36" />
                  <p className="link-name">About</p>
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </Popup>
  </nav>
)

export default Header
