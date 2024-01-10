import React from "react"
import CartItem from "./CartItem"

function CartList ({productList,onRemoveItem}) {

    return (
        <ul className="cart-items">
            {productList.map((item) => (
                <CartItem item={item} onRemoveItem={onRemoveItem}/>
            ))}
            
        </ul>
    )
}

export default CartList