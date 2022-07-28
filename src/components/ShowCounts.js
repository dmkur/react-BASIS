import {useSelector} from "react-redux";

export function ShowCounts() {
    const {count1, users, isLoading, serverError} = useSelector(state => state.count1Reducer);
    const {count2} = useSelector(state => state.count2Reducer);
    return (
        <div>
            <h2>Count 1 - {count1}</h2>
            <h2>Count 2 - {count2}</h2>
            {isLoading && <h3>Loading...</h3>}
            {serverError && <h3>{serverError}</h3>}
            <div>Users - {JSON.stringify(users)}</div>
        </div>
    )
}