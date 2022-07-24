import React, {Component} from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {name, body} = this.props.comment
        return (
            <div>
                {name} -- {body}
            </div>
        );
    }
}

export default Comment;