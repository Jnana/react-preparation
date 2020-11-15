import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { List } from 'semantic-ui-react'
import UserComponent from './UserComponent';

function UsersComponent() {

    const [users, setUsers] = useState([]);
    const [userName, setUserName] = useState('');

    const LoggedInUserContext = React.createContext(userName);

    console.log(userName);

    useEffect( () => {
        console.log('useEffect........ called');
        //setUserName('jnana');
        fetchUsers();    
    }, []);

    const fetchUsers = () => {
        const USERS_URL = "https://jsonplaceholder.typicode.com/users";
        fetch(USERS_URL)
		.then((response) => response.json())
		.then((response) => {
            setUsers(result => [...result, response]);
		});
    }

    const onListItemClicked = (e) => {
        const selectedUserName = e.target.textContent;

        if(e.target.textContent) {
        console.log('Setting new user name....');
        setUserName(...userName, selectedUserName)
        }
    }

    const goToUseComponent = () => {
        if(userName) {
            console.log('goToUseComponent....');
            return (
                <LoggedInUserContext.Provider value={userName}>
                    <UserComponent />
                </LoggedInUserContext.Provider>
            )
        }
    }

    return (
        <div>
            {goToUseComponent()}
            <List>
                {
                    users.map((manyUsers) => {
                        return (
                            manyUsers.map((oneUser) => {
                                return (
                                    <List.Item key={Math.random()} onClick = {onListItemClicked}>
                                        <List.Content>
                                            <List.Header>
                                                {oneUser.name}
                                            </List.Header>
                                        </List.Content>
                                    </List.Item>
                                )
                        }))
                    })
                }
            </List>
        </div>
    )
}

export default UsersComponent;
