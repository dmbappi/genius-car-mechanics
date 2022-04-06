import React from 'react';
import Header from '../../Shared/Header/Header';

const Login = () => {
    return (
        <div>
            <Header/>
            <h2>Please Login</h2>
            <button className="btn btn-warning">Google Sign In</button>
            
        </div>
    );
};

export default Login;