import React from "react";

function Button ({buttonClass, title, handleClick,id}) {
    return (
        <button id={id && `${id}`} className={buttonClass} onClick={handleClick}>
            {title}
        </button>
    )
}

export default Button