import React, {useEffect, useRef} from "react";
import {Toast} from "primereact/toast";

const Message: React.FC<{ message: string, errorMessage: string }> = ({message, errorMessage}) => {

    const toast: React.MutableRefObject<Toast | null> = useRef(null)

    useEffect(() => {
        if (message)
            toast.current?.show(
                { severity: 'success', detail: `${message}`})
        if (errorMessage)
            toast.current?.show(
                { severity: 'error', detail: `${errorMessage}`})
    }, [])
    return (
            <div className="card">
                <Toast style={{color: "white"}} ref={toast} position="bottom-right"/>
            </div>
    )
}

export default Message