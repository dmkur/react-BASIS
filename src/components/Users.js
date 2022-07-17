import React, {Component} from 'react';
import {ApiUsersServices} from "../services/api.users.services";
import User from "./User";

class Users extends Component {
    state = {users:[], x:'lol'}

    constructor(props, context) {
        super(props, context);
        this.apiUserServices = new ApiUsersServices()
        // this.apiUserServices.getUsers().then(value => this.setState({...this.state, users:value}))
        this.apiUserServices.getUsers().then(value => this.setState({users:value}))
    }

    render() {
        return (
            <div>
                Users Component
                {this.state.users.map(value=> <User item={value}/>)}
            </div>
        );
    }
}

export default Users;