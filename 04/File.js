import React from 'react';

class File extends React.Component {
    handleFileChange = (event) => {
        const files = Array.from(event.target.files).filter((file) => file.type === 'text/plain');
        this.props.onFilesAdded(files);
    };

    render() {
        return (
            <input 
                type="file"
                multiple
                onChange={this.handleFileChange}
            />
        );
    }
}

export default File;