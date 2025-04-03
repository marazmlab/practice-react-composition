import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

class Table extends React.Component {
    render() {
        const {data} = this.props;

        return (
            <section className='Table'>
                <TableHeader /> 
                <TableBody data={data}/>
                <TableFooter data={data}/>
            </section>
        );
    }
}

export default Table;
