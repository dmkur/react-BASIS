import {useDispatch} from "react-redux";
import {count1Actions} from "../redux";

export function Count1Tool() {
const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(count1Actions.inc())}>inc</button>
            <button onClick={() => dispatch(count1Actions.dec())}>dec</button>
            <button onClick={() => dispatch(count1Actions.reset())}>reset</button>
        </div>
    )
}