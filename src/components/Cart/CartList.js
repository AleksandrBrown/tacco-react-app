import React from "react"
import CartItem from "./CartItem"

function CartList ({productList,onRemoveItem}) {

    return (
        <ul className="cart-items">
            {productList.map((item) => (
                <CartItem key={item.id} item={item}/>
            ))}
            
        </ul>
    )
}

export default CartList