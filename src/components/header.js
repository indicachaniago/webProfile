import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/main_css.css"

const Header = ({ siteTitle }) => (
  <div class="w3-top">
  <div class="w3-bar w3-white w3-card">
  <a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
  <a href="#" class="w3-bar-item w3-button w3-padding-large">Home</a>
  <a href="#myProfile" class="w3-bar-item w3-button w3-padding-large w3-hide-small">My Profile</a>
  <a href="#experience" class="w3-bar-item w3-button w3-padding-large w3-hide-small">Experience</a>
  <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small">Contact</a>
  </div>
  </div>
  )
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
