import React, {Component} from 'react';
import {ApiUsersServices} from "../services/api.users.services";
import User from "./User";

class Users extends Component {
    // useState
    state = {users:[], x:'lol'}

    constructor(props, context) {
        console.log('constructor')
        super(props, context);

    }

    // useEffect
    componentDidMount() {
        console.log('componentDidMount')
        this.apiUserServices = new ApiUsersServices()
        // this.apiUserServices.getUsers().then(value => this.setState({...this.state, users:value}))
        this.apiUserServices.getUsers().then(value => this.setState({users:value}))
    }

    render() {
        // return
        console.log('render')
        return (
            <div>
                <h2>Users Component</h2>
                {this.state.users.map(value=> <User item={value} key={value.id}/>)}
            </div>
        );
    }
}

export default Users;