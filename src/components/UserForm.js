import React, { Component } from 'react'

class UserForm extends Component {
    state = {
        ...this.returnUserObject()
    }

    returnUserObject() {
        if(this.props.currentUser === -1){
            return {
                name: '',
                age: '',
                nickName: ''
            } 
        } else {
            return this.props.list[this.props.currentUser]
        }
    }

    componentDidUpdate(prev) {
        if (prev.currentUser !== this.props.currentUser || prev.list !== this.props.list) {
            this.setState({ ...this.returnUserObject })
            console.log(prev, this.props);
            
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handleEdit = (e) => {
    //     e.preventDefault()
    //     this.props.addOrEdit(this.state);
    // }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addOrEdit(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <input name="name" placeholder="Name" onChange={this.handleInputChange} value={this.state.name}></input>
                <input type="number" name="age" placeholder="Age" onChange={this.handleInputChange} value={this.state.age}></input>
                <input name="nickName" placeholder="Nickname" onChange={this.handleInputChange} value={this.state.nickName}></input>
                <br /> <br />
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default UserForm;