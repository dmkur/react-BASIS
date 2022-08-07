import {Outlet} from "react-router-dom"
import {Header} from "../components";
import {useSelector} from "react-redux";

const MainLayout = () => {
    const {errors} = useSelector(state => state.auth);

    return (
        <div>
            <Header/>
            <Outlet/>
            {errors && <span>{JSON.stringify(errors)}</span>}
        </div>
    )
};

export {MainLayout}
