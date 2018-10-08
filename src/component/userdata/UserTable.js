import React from 'react'
import TableList from './TableList';
import UserTableHeader from './UserTableHeader';

const UserTable = ({ slicedItems }) => {
    return (
        <div className="Table">
            <UserTableHeader />
            {
                slicedItems.map(item => (
                    <div className="Table_Row" key={item.id}>
                        <TableList {...item} />
                    </div>
                ))
            }
        </div>
    )
}
export default UserTable;