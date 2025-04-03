import React from 'react';


const TableRow = ({ name, price, quantity }) => {
    const total = price * quantity;
    return (
        <ul className='TableRow'>
            <li className='TableRow__element element__name'>{name}</li>
            <li className='TableRow__element element__price'>{price} zł</li>
            <li className='TableRow__element element__quantity'>{quantity}</li>
            <li className='TableRow__element element__total'>{total} zł</li>
        </ul>
    );
}

export default TableRow;