import React, {Component} from 'react';
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";


class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3>Posts</h3>
                    <Posts/>
                </div>
                <div>
                    <h3>Comments</h3>
                    <Comments/>
                </div>
            </div>
        );
    }
}

export default App;