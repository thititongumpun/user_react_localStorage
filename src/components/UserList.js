import React, { Component } from 'react'
import UserForm from './UserForm'

class UserList extends Component {
    state = {
        currentUser: -1,
        list: this.returnList()
    }

    returnList() {
        if (localStorage.getItem('users') == null)
        localStorage.setItem('users', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('users'))
    }

    handleEdit = (user) => {
        this.setState({ currentUser: user})
    }

    handleDelete = (user) => {
        let list = this.returnList()
        list.splice(user, 1);
        localStorage.setItem('users', JSON.stringify(list))
        this.setState({list, currentUser: -1})
    }

    addOrEdit = (user) => {
        let list = this.returnList()
        if (this.state.currentUser === -1){
            list.push(user);
        } else {
            list[this.state.currentUser] = user
        }
        localStorage.setItem('users', JSON.stringify(list))
        this.setState({list, currentUser: -1})
    }

    render() {
        return (
            <div>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr className="table dark-gray">
                            <td>Name</td>
                            <td>Age</td>
                            <td>Nickname</td>
                            <td>Action</td>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.list.map((item, index) => {
                            return <tr key={ index }>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.nickName}</td>
                            <td>
                            <button onClick={() => this.handleEdit(index)}>Edit</button> 
                            <button onClick={() => this.handleDelete(index)}>Delete</button>
                            </td>

                            </tr>
                        })}
                    </tbody>


                </table>
                <UserForm
                        currentUser={this.state.currentUser}
                        list={this.state.list}
                        addOrEdit={this.addOrEdit}
                    />
            </div>
        )
    }
}

export default UserList;