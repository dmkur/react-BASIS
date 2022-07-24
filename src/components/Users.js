import React, {Component} from 'react';
import {ApiUsersServices} from "../services/api.users.services";
import User from "./User";

class Users extends Component {

    state = {users:[], x:"cool"}

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.apiUserServices = new ApiUsersServices()
        this.apiUserServices.getUsers().then(value => this.setState({users:value}))
    }

    render() {
        return (
            <div>
                {this.state.users.map(value=> <User item={value} key={value.id}/>)}
                <button onClick={() => {
                    this.state.users.pop()
                    this.setState({users: this.state.users})
                }}>Delete last user</button>
            </div>
        );
    }
}

export default Users;