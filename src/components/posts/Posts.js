import React, {Component} from 'react';

import {postService} from "../../services";
import Post from "../post/Post";

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {posts: []}
    }

    componentDidMount() {
        postService.getAllPosts().then(({data}) => this.setState({posts: data}))
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => <Post post={post} key={post.id}/>)}
            </div>
        );
    }
}

export default Posts;