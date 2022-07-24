import React, {Component} from 'react';

import {commentService} from "../../services";

import Comment from "../comment/Comment";

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {comments:[]}
    }

    componentDidMount() {
        commentService.getAllComments().then(({data}) => this.setState({comments: data}))
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
            </div>
        );
    }
}

export default Comments;