import React from "react"
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import productListData from "../productListData";

function OrderAgainItem ({item}) {
    const cartR = useSelector((state) => state.cart.value)
    const [isActive, setIsActive] = React.useState(false)
    const dispatch = useDispatch()
    const handlerAddToCart = (e) => {
        console.log(e.target)
        let productItem = productListData.find(item => item.id === parseFloat(e.target.id))
        if(e.target.classList.contains('active')) {
        } else {
            setIsActive(!isActive)
            dispatch(addToCart(productItem))
        }
    }
    return (
    <div
        id={item.id}
        className="flex flex-col rounded-lg bg-white h-40  dark:bg-amber-500 md:max-w-xl md:flex-row">
        <img
            className="h-auto w-1/2 rounded-l-lg object-cover"
            src={item.productImg}
            alt={item.productName} />
        <div className="flex flex-col justify-start py-4 px-6 w-1/2 gap-3">
            <h5
                className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
                {item.productName}
            </h5>
            <p className="text-xs text-neutral-500 dark:text-neutral-300 font-semibold">
                {item.data}
            </p>
            <div>
                <button id={item.id} className={isActive ? 'active' : '' + 'font-bold text-lg text-amber-300 bg-amber-600 rounded-2xl w-8 h-8 flex justify-center items-center active:translate-y-0.5'} onClick={handlerAddToCart}>{!isActive ? '+' : '-' }</button>
            </div>
        </div>
    </div>
    )
}

export default OrderAgainItem