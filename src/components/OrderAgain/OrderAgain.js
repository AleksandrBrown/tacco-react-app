import React from "react"
import OrderAgainItem from "./OrderAgainItem";
import { useSelector } from "react-redux";
import productListData from "../productListData";

function OrderAgain({ handleCardOpnr }) {
    const cartR = useSelector((state) => state.cart.value)
    return (
        <div className="flex flex-row gap-6">
            {productListData.map(item => (
                <OrderAgainItem 
                    item={item}
                />
            ))}
        </div>
    )
}
export default OrderAgain