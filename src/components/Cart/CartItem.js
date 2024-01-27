import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../../store/slices/cartSlice"

function CartItem ({item}) {
    const dispatch = useDispatch();
    const handleRemoveProduct = (e) => {
        dispatch(removeFromCart(e.target.id));
    }
    return (
        <li key={item.id} className="flex items-center border-b">
            <div className="flex justify-between px-2 py-3 w-full">
                <div className="flex gap-2">
                    <img className={'w-14 h-14 rounded'} src={item.img}/>
                    <div className="flex flex-col justify-between">
                        <p className="font-semibold text-white text-md">{item.name}</p>
                        <p className="text-amber-400 text-md">{item.price}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <p className="text-amber-400 text-md flex justify-end">{item.quantity}</p>
                    <button id={item.id} onClick={handleRemoveProduct} className="text-xs text-amber-700 hover:text-amber-800 focus:outline-none">remove</button>
                </div>
            </div>
        </li>
    )
}

export default CartItem