import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './store/Store';
import Users from './component/Users';
import './sass/App.scss';

class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <React.Fragment>
                    <h1>Jeeva Assignment</h1>
                    <Users />
                </React.Fragment>
            </Provider>
        )
    }
}

export default App;