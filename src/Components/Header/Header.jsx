import React from "react";
import logo from "../../logo.png";
import "./Header.css";
import {Link} from 'react-router-dom'
import {ImSearch} from 'react-icons/im'

const Header = () => {
  // console.log(logo);
  return (
    <nav className="header">
      <img src={logo} alt="logo" />

      <div>
       <Link to="/tvshows" >TV Shows</Link>
       <Link to="/movies" >Movies</Link>
       <Link to="/added" >Recently Added</Link>
       <Link to="/mylist" >My List</Link>
      </div>

      <ImSearch/>

    </nav>
  );
};

export default Header;
