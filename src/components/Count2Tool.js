import {useDispatch} from "react-redux";
import {count2Actions} from "../redux";

export function Count2Tool() {
const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(count2Actions.inc(5))}>inc</button>
            <button onClick={() => dispatch(count2Actions.dec(2))}>dec</button>
            <button onClick={() => dispatch(count2Actions.reset(100))}>reset</button>
        </div>
    )
}