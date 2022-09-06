import React from "react"

function Button({func, type}) {
    return(
        <button onClick={func}>{type}</button>
    )
}

export default Button