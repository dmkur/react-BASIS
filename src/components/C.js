import {MyContext} from "../index"

export default function C() {
    return (
        <div>
            <MyContext.Consumer>
                {
                    (item) => {
                        console.log(item, '---item')
                        console.log(item.prop1, '---prop1')
                        item.f('Context method')
                    }
                }
            </MyContext.Consumer>
            C component
        </div>
    )
}