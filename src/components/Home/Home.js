import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const{user}=useAuth();
    return (
        <div>
            <h1>Home</h1>
            <h5>user: {user.displayName}</h5>
        </div>
    );
};

export default Home;