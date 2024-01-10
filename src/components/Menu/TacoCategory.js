import React from "react";

function TacoCategory ({list}) {
    return (
        <ul className="flex flex-row gap-6">
            {list.map((item => (
                <li className="text-white hover:text-lime-300" key={item.linkName}><a href={item.link}>{item.linkName}</a></li>
            )))}
        </ul>
    )
}

export default TacoCategory