import React from 'react';
import { createRoot } from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    handleFilesAdded = (files) => {
        files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const content = event.target.result;
                const newFile = {
                    id: uuidv4(),
                    name: file.name,
                    size: file.size,
                    content,
                };
                this.setState((prevState) => ({
                    filesList: [...prevState.filesList, newFile],
                })); 
            };

            reader.onerror = () => {
                console.error(`Błąd podczas odczytu pliku: ${file.name}`);
            };
            
            reader.readAsText(file);
        });
    };

    render() {
        const { filesList } = this.state;
        return (
            <section 
                style={{ 
                    margin: '20px', 
                    padding: '10px', 
                    border: '1px solid #ddd', 
                    borderRadius: '5px' 
                }}
            >
                <File onFilesAdded={this.handleFilesAdded} />
                <List files={filesList}/>
            </section>
        );
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
