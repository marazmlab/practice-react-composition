import React from 'react';

class Form extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const firstName = event.target.elements.firstName.value;
        const lastName = event.target.elements.lastName.value;

        this.props.onAddUser({ firstName, lastName });

        event.target.reset();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name='firstName' placeholder='Imię' />
                <input name='lastName' placeholder='Nazwisko' />
                <button type='submit'>Dodaj</button>
            </form>
        );
    }
}

export default Form;