import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
    <div>
        <h1> My Blog </h1>
        <NavLink to="/" activeClassName="is-active" exact={true} >Posts</NavLink>
        <NavLink to="/add" activeClassName="is-active">Add Post</NavLink>
        <NavLink to="/login" activeClassName="is-active">Login</NavLink>
    </div>
);

export default Header;