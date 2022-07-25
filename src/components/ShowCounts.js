import {useSelector} from "react-redux";

export function ShowCounts() {
    const {count1} = useSelector(state => state.count1Reducer);
    return (
        <div>
            <h2>Count 1 - {count1}</h2>
        </div>
    )
}