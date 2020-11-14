import React from 'react';
import { Redirect } from 'react-router-dom';
import { List } from 'semantic-ui-react'

class UsersComponent extends React.Component {

    constructor(pros) {
        super(pros);
        this.state = {users:[], username:''}
        this.fetchUsers()
    }

    fetchUsers() {
        const USERS_URL = "https://jsonplaceholder.typicode.com/users";
        fetch(USERS_URL)
		.then((response) => response.json())
		.then((response) => {
            this.setState({users: response});
			console.log(response);
		});
    }

    onListItemClicked(value) {
        if(value) {
            this.setState({username: value})
        }
    }

    goToUseComponent() {
        if(this.state.username) {
            console.log(this.state.username);
            return <Redirect to='/user'></Redirect>
        }
    }

    showAllUsers() {
    }

    render() {
        return (
            <div>
                {this.goToUseComponent()}
                <List divided relaxed>
                     {
                    this.state.users.map((username) => {
                        return (
                            <List.Item key= {Math.random()} onClick= { () => {this.onListItemClicked(username.name)} }>
                                <List.Content>
                                    <List.Header>
                                        {username.name}
                                    </List.Header>
                                </List.Content>
                            </List.Item>
                        );
                    })                        
                }
                </List>
            </div>
        )
    }
}

export default UsersComponent;
