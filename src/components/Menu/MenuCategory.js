import React from "react";

function MenuCategory ({list}) {
    return (
        <ul className="flex flex-row gap-6">
            {list.map((item => (
                <li className="text-white hover:text-amber-400" key={item.linkName}><a href={item.link}>{item.linkName}</a></li>
            )))}
        </ul>
    )
}

export default MenuCategory