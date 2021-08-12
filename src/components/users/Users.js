import React, { Component } from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner';

const Users = ({ users, loading }) => {
    console.log("length is "+ users.length);
    return (
        <div>
            {!loading && <div style={userStyles}>
                {users.map(user => (
                    <UserItem key={user.id} user={user}></UserItem>
                ))}
            </div>}
            {loading && <Spinner />}
            
        </div>

    )
};

const userStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'

}


export default Users
