import React from 'react';
import { createRoot } from 'react-dom/client';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    };

    handleAddUser = (user) => {
        this.setState((prevState) => ({
            usersList: [...prevState.usersList, user],
        }));
    };



    render() {
        const  { usersList } = this.state;

        return (
            <section>
                <Form onAddUser={this.handleAddUser} />
                <List items={ usersList } />
            </section>
        ) 
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
