import React from 'react';

function ListItem({ firstName, lastName}) {
    return (
        <li>
            {firstName} {lastName}
        </li>
    )
}

export default ListItem;