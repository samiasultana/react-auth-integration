import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <form>
                <input type="email" name="Email" id="" />
                <br />
                <input type="password" name="Password" id="" />
                <br />
                <Link to="/login">Already Registered?</Link>
            </form>
        </div>
    );
};

export default Register;