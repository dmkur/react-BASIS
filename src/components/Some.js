import {useEffect} from "react";

export default function Some() {
    useEffect(() => {
        console.log('some-mount')

        return () => {
            console.log('some-UNMOUNT')
        }
    },[]);

    return (
        <div>
            Some component 
        </div>
    )
}