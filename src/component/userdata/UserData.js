import React from 'react';
import UserTable from './UserTable';
import Pagination from '../pagination/Pagination';

const UserData = ({ slicedItems, totalItems, numItemsToDisplay, gotoNextPage }) => {
    return (
        <React.Fragment>
            <UserTable slicedItems={slicedItems} />
            {
                numItemsToDisplay < totalItems &&
                <Pagination totalItems={totalItems} numItemsToDisplay={numItemsToDisplay} gotoNextPage={gotoNextPage} />
            }
        </React.Fragment>
    )
}
export default UserData;