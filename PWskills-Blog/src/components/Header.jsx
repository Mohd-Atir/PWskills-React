import React from "react";
import ModalBox from "./ModalBox";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
            <Link to='/' className="navbar-brand">
                <h3>PwSkills Blog</h3>
            </Link>
        <ModalBox/>
      </div>
    </nav>
  );
}

export default Header;