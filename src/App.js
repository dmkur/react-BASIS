import {Link, Route, Routes} from "react-router-dom";
import {Todos} from "./components/Todos";
import {Home} from "./components/Home";
import {Albums} from "./components/Albums";
import {Comments} from "./components/Comments";
import {Post} from "./components/Post";

function App() {
    return (
        <div>
            <div>
                <ul>
                    <li><Link to={'/'}>home</Link></li>
                    <li><Link to={'/todos'}>todos</Link></li>
                    <li><Link to={'/albums'}>albums</Link></li>
                    <li><Link to={'/comments'}>comments</Link></li>
                </ul>
            </div>
            <div>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={'/todos'} element={<Todos/>}/>
                    <Route path={'/albums'} element={<Albums/>}/>
                    <Route path={'/comments'} element={<Comments/>}>
                        <Route path={':postId'} element={<Post/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
