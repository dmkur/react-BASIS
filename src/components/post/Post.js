import React, {Component} from 'react';

class Post extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {id, title} = this.props.post
        return (
            <div>
                {id} - {title}
            </div>
        );
    }
}

export default Post