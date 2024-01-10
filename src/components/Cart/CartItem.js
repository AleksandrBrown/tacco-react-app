import React from "react"

function CartItem ({item,onRemoveItem}) {

    return (
        <li key={item.id} className="flex justify-between items-center border-b py-2">
            <div>
                <p className="font-semibold text-white text-xl">{item.productName}</p>
                <p className="text-amber-400 text-lg">${item.productPrice}</p>
            </div>
            <button
                className="text-amber-700 hover:text-amber-800 focus:outline-none"
                onClick={() => onRemoveItem(item, "remove")}
            >
            Remove
            </button>
        </li>
    )
}

export default CartItem