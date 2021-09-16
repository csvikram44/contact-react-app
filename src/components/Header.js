import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="ui menu">
            
                <div className="title">
                    <h2>Contact Manager</h2>
                </div>
                <div className="menu-items">
                <Link to="/add">
                    <button className="ui button blue right floated">Add Contact</button>
                </Link>
                </div>
  
        </div>
    );
};

export default Header;