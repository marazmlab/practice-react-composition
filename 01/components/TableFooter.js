import React from 'react';

const TableFooter = ({data}) => {
    const total = data.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <section className='TableFooter'>
            <ul>
                <li colSpan='3'>Suma</li>
                <li>{total} zł</li>
            </ul>
        </section>
    )
}

export default TableFooter;