import React from 'react';
import ListItem from './ListItem';

function List({ items }) {
    return (
        <ul>
            {items.map((user, index) => (
                <ListItem
                    key={index}
                    firstName={user.firstName}
                    lastName={user.lastName}
                />
            ))}
        </ul>
    );
}

export default List;

