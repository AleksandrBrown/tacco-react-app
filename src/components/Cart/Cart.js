import React from "react"
import CartList from "./CartList"
import Button from "../SpecialComponents/Button"
import { useSelector } from "react-redux"
import { XMarkIcon } from "@heroicons/react/24/outline"

function Cart ({isActive, handleCartCloser}) {
    const cartArr = useSelector((state) => state.cart.value)
    const cartTotal = useSelector((state) => state.cart.total)
    return (
        <div className={`${isActive ? "flex " : "hidden" } fixed w-80 h-96 top-28 right-0 z-40`}>
            <div className={`${isActive ? "flex right-4" : "hidden -right-10"} absolute top-30 z-50 bg-stone-900 dark:bg-amber-400 rounded w-full p-8 transition ease-in duration-300`}>
                <div className="cart-container w-full h-96 flex flex-col justify-between">
                    <div className="flex flex-col"> 
                        <div className="flex justify-end items-center">
                            <Button buttonClass={"text-lg text-white font-bold hover:text-amber-500"} title={<XMarkIcon className={'text-white dark:text-stone-800 hover:text-amber-400 h-6'}/>} handleClick={handleCartCloser}/>
                        </div>
                        {cartArr.length === 0 ? (
                            <p className="text-xl text-white dark:text-stone-800 font-medium">Your cart is empty...</p>
                        ) : (
                            <div className="overflow-scroll h-72 mt-8">
                                <CartList productList={cartArr} />
                            </div>
                            
                        )}
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <Button  buttonClass={"text-sm text-stone-800 px-4 py-2 rounded border-2 border-amber-300 dark:text-white dark:bg-stone-800 dark:border-stone-800 dark:hover:bg-amber-400 dark:hover:text-stone-800 font-medium bg-amber-300 hover:text-amber-300 hover:bg-transparent hover:border-amber-300 transition easy-in"} title={"Place order"}/>
                        </div>
                        <div className="flex gap-4 items-center text-lg text-stone-300 dark:text-stone-800">
                            <div>Total:</div> <p className="text-xl text-white dark:text-stone-800 font-bold">{cartTotal} $</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Cart