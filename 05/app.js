import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }

    handleTextChange = (event) => {
        this.setState({ text: event.target.value });
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea 
                content={ text }
                onChange={this.handleTextChange}
            />
        );
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
