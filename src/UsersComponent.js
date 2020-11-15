import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { List } from 'semantic-ui-react'

function UsersComponent() {

    const [users, setUsers] = useState([]);
    const [userName, setUserName] = useState('');

    console.log('UsersComponent........ called');

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
			console.log(response);
		});
    }

    const onListItemClicked = (value) => {
        if(value) {
        console.log('onListItemClicked before....');
           // setUserName(value)
        }
    }

    const goToUseComponent = () => {
        if(userName) {
            console.log('goToUseComponent....');
            return <Redirect to='/user'></Redirect>
        }
    }

    return (
        <div>
            <List>
                {
                    users.map((manyUsers) => {
                        console.log(users);
                        return (
                        manyUsers.map((oneUser) => {
                            console.log(oneUser.name);
                            return (
                                <List.Item key={Math.random()}>
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
