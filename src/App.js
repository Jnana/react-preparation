import React from 'react';
import { Router, Route, Redirect} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';


import LoginComponent from './LoginComponent';
import UsersComponent from './UsersComponent';
import UserComponent from './UserComponent';

class App extends React.Component {
    render() {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <Route exact path={'/'} component={LoginComponent} />
            <Route exact path={'/users'} component={UsersComponent} />
            <Route exact path={'/user'} component={UserComponent} />
        </Router>
    );
    }
}

export default App;