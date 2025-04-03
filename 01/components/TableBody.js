import React from 'react';
import TableRow from './TableRow';

const TableBody = ({ data }) => {
    return (
        <section className='TableBody'>
            {data.map((item) => (
                <TableRow
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                />
            ))}
        </section>
    );
}

export default TableBody;