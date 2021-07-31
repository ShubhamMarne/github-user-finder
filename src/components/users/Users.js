import React, { Component } from 'react'
import UserItem from './UserItem'

export class Users extends Component {
    state = {
        users : 
            [
                {
                    id : 'id',
                    login : 'mojombo',
                    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                    html_url: "https://github.com/mojombo"
                },
                {
                    id : 'id',
                    login : 'mojombo',
                    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                    html_url: "https://github.com/mojombo"
                },
                {
                    id : 'id',
                    login : 'mojombo',
                    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                    html_url: "https://github.com/mojombo"
                },
                {
                    id : 'id',
                    login : 'mojombo',
                    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                    html_url: "https://github.com/mojombo"
                }
            ]
    }

    render() {
        return (
            <div style={userStyles}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user}></UserItem>
                ))}
            </div>
        )
    }
}

const userStyles = {
    display: 'grid',
    gridTemplateColumns : 'repeat(3, 1fr)',
    gridGap : '1rem'

}


export default Users
