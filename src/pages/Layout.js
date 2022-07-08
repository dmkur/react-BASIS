import {Link, Outlet} from 'react-router-dom';

export function Layout() {
    return (
        <div>
            <div>
                <h3>sub menu</h3>
                <ol>
                    <li><Link to={'/layout/users'}>users</Link></li>
                    <li><Link to={'posts'}>posts</Link></li>
                    <li><Link to={'comments'}>comments</Link></li>
                </ol>
            </div>
            <Outlet/>
        </div>
    )
}