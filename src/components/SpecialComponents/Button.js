import React from "react";

function Button ({buttonClass, title, handleClick}) {
    console.log('btn render')
    return (
        <button className={buttonClass} onClick={handleClick}>
            {title}
        </button>
    )
}

export default Button