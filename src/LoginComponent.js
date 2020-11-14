import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function LoginComponent() {

    const [login, setLogin] = useState(false);
    const [loggedInUser, setloggedInUser] = useState({name: ''});

    useEffect( () => {
        // Do the initialization here....
    })

    const onLoginButtonClicked = () => {
        console.log('onLoginButtonClicked ')
        if(loggedInUser.name === 'admin') {
            setLogin(true);
        }
    }

    const onUserNameEntered = (eventSource) => {
        setloggedInUser({name: eventSource.target.value});
        console.log('onUserNameEntered: ' + loggedInUser.name);
    }

    const goToUsersComponent = () => {
        if(login) {
            console.log('goToUsersComponent: ');
            return <Redirect to='/users'></Redirect>
        }
    }

    return (
        <div>
            {goToUsersComponent()}
            <input onChange={onUserNameEntered}></input>
            <button onClick={onLoginButtonClicked}>Click me to login</button>
        </div>
    )
}

export default LoginComponent;
