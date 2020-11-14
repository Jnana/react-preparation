import React from 'react';
import { Redirect } from 'react-router-dom';

class LoginComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {loginsuccessful: false};
		this.onLoginButtonClicked = this.onLoginButtonClicked.bind(this);
		this.onUserNameEntered = this.onUserNameEntered.bind(this);
    }

    onLoginButtonClicked = () => {
        console.log('onLoginButtonClicked ')
        if(this.state.name === 'admin') {
            this.setState({loginsuccessful: true});
        }
    }

    onUserNameEntered = (userName) => {
        this.setState({name: userName});
        console.log('onUserNameEntered: ' + userName)
    }

    goToUsersComponent() {
        if(this.state.loginsuccessful) {
            console.log('goToUsersComponent: ');
            return <Redirect to='/users'></Redirect>
        }
    }

    render() {
        return (
            <div>
                {this.goToUsersComponent()}
                <input onChange={(e) => { this.onUserNameEntered(e.target.value) }}></input>
                <button onClick={() => {this.onLoginButtonClicked()}}>Click me to login</button>
            </div>
        )
    }
}

export default LoginComponent;
