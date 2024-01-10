import React from "react"
import CartList from "./CartList"
import Button from "../SpecialComponents/Button"

function Cart ({isActive, handleCartCloser, productList, removeItem, totalCount}) {
    return (
        <div className={`${isActive ? "flex " : "hidden" } fixed w-full h-screen top-0 left-0`}>
            <div className={`${isActive ? "flex right-0" : "hidden -right-10"} absolute top-0 z-20 bg-stone-900 w-1/4 px-10 py-4 transition ease-in duration-300`}>
                <div className="cart-container w-full h-screen flex flex-col justify-between">
                    <div className="flex flex-col "> 
                        <div className="flex justify-end">
                            <Button buttonClass={"text-xl text-white font-bold hover:text-amber-500"} title={"X"} handleClick={handleCartCloser}/>
                        </div>
                        <h2 className="text-4xl text-amber-500 font-semibold mb-20">Shopping Cart</h2>
                        {productList.length === 0 ? (
                            <p className="text-2xl text-white">Your cart is empty</p>
                        ) : (
                            <CartList  productList={productList} onRemoveItem={removeItem}/>
                        )}
                    </div>
                    <div className="mb-20 flex flex-col gap-6">
                        <div className="flex gap-4 items-center text-xl text-stone-300">
                            Here is your total: <p className="text-3xl text-white font-bold">{totalCount}</p>
                        </div>
                        
                        <div>
                            <Button  buttonClass={"text-stone-800 px-10 py-2 rounded border-2 border-amber-300 font-medium bg-amber-300 hover:text-amber-300 hover:bg-transparent hover:border-amber-300 transition easy-in"} title={"Place order"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-bg backdrop-blur-sm absolute w-full h-screen" onClick={handleCartCloser}></div>
        </div>
        
    )
}

export default Cart