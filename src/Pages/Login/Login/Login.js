import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';

const Login = () => {
    const {signInUsinGoogle} = useAuth();
    return (
        <div style={{"text-align": "center"}}>
            <h2>Please Login</h2>
            <button onClick={signInUsinGoogle} className="btn btn-warning">Google Sign In</button>
            
        </div>
    );
};

export default Login;