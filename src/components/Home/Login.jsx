import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function Login() {

    const history = useHistory();

    useEffect(() => {
        history.push('/');
    });
    return (
        <div>
            
        </div>
    )
}

export default Login
