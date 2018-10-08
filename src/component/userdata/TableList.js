import React, { Component } from 'react';

const TableList = ({ name, username, email, phone }) => {
    return (
        <React.Fragment>
            <div className="Table_Row_Cell" >{name}</div>
            <div className="Table_Row_Cell">{username}</div>
            <div className="Table_Row_Cell">{email}</div>
            <div className="Table_Row_Cell">{phone}</div>
        </React.Fragment>
    )
}

export default TableList;