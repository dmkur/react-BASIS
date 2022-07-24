import React, {Component} from 'react';
import {ApiUsersServices} from "../services/api.users.services";
import User from "./User";

class Users extends Component {

    state = {users:[]}

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
                <h2>Users Component</h2>
                {this.state.users.map(value=> <User item={value} key={value.id}/>)}
            </div>
        );
    }
}

export default Users;