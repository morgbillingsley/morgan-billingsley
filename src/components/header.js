import { Link, navigate } from "gatsby"
import SmartLink from "./smartLink"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import SearchBar from "./searchBar"
import icon from "../images/icon.png"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar expand="lg" variant="light" bg="white" fixed="top" className="border-1 border-bottom">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img
          src={icon}
          alt="Morgan Billingsley, Phoenix Software Development"
          width="auto"
          height="25px"
          className="mr-2"
        /> {siteTitle}
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <SmartLink className="nav-link" to="/">Home</SmartLink>
          <SmartLink className="nav-link" to="/articles/welcome/">Blog</SmartLink>
          <SmartLink className="nav-link" to="/contact/">Contact</SmartLink>
        </Nav>
        <SearchBar size="sm" onSubmit={query => navigate('/search/', {
          state: { query }
        })} />
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
