import React from 'react';

class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.textareaRef = React.createRef();
    }

    getSnapshotBeforeUpdate(prevProps) {
        const textarea = this.textareaRef.current;

        if (textarea.value.trim() === '') {
            textarea.style.height = 'auto'; 
        }

        if ( textarea.offsetHeight < textarea.scrollHeight) {
            return { resize: true };
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const textarea = this.textareaRef.current;

        if (snapshot && snapshot.resize) {
            const newHeight = Math.min(textarea.scrollHeight, 100);
            textarea.style.height = `${newHeight}px`;
        }
    }

    render() {
        return (
            <textarea 
                ref={this.textareaRef}
                value={this.props.content}
                onChange={this.props.onChange}
                style={{
                    width:'50%',
                    margin: '25%',
                    resize: 'none',
                    // overflow: 'hidden'
                }}
            />
        );
    }
}

export default Textarea;