import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import "./Header.css";

const Header = () => {
    // const { user, signOutGoogle } = useFirebase();
    const { user, signOutGoogle } = useAuth();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <span>{user?.displayName}</span>
            {
                user?.email &&
                <button onClick={signOutGoogle}>Log Out</button>
            }
        </div>
    );
};

export default Header;