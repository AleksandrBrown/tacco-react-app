import React from "react";

function Button ({buttonClass, title, handleClick}) {
    return (
        <button className={buttonClass} onClick={handleClick}>
            {title}
        </button>
    )
}

export default Button