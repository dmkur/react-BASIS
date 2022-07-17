import React, {Component} from 'react';

class User extends Component {

    constructor(props) {
        super(props);
        this.xxx = this.props.item
    }
    render() {
        return (
            <div>
                {this.xxx.id} - {this.props.item.name}
            </div>
        );
    }
}

export default User;