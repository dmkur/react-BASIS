import React, {Component} from 'react';
import Some from "./Some";

class User extends Component {

    constructor(props) {
        super(props);
        this.xxx = this.props.item
        this.id = 0
    }


    render() {
        return (
            <div>
                {this.xxx.id} - {this.props.item.name}
                <Some/>
            </div>
        );
    }

    componentDidMount() {
        console.log('Mount-user')
        // this.id = setInterval(() => {
        //     console.log('interval', this.xxx.id)
        // }, 1000)
    }

    componentWillUnmount() {
        console.log('Unmount-user')
        // clearInterval(this.id)
    }
}

export default User;