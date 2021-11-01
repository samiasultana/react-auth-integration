import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    // const { signInGoogle } = useFirebase();
    const { signInGoogle } = useAuth();
    return (
        <div>
            <h1>Login</h1>
            <button onClick={signInGoogle}>Google Sign In</button>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;