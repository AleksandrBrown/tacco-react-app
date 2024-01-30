import React from "react"
import { useSelector,useDispatch } from "react-redux"
import Button from "../SpecialComponents/Button"
import { addToCart } from '../../store/slices/cartSlice'

function Orders () {
    const orders = useSelector((state) => state.user.orders)
    const dispatch = useDispatch()
    const [activetab, setActiveTab] = React.useState(null)
    const getStatusColor = (status) => {
        switch (status) {
          case "Pending":
            return "text-yellow-500";
          case "Processing":
            return "text-blue-500";
          case "Shipped":
            return "text-green-500";
          case "Finished":
            return "text-amber-500";
          default:
            return "text-gray-500";
        }
    }
    const accordionFn = (e) => {
        console.log(e.target.id)
        console.log(activetab)
        if(e.target.id !==  activetab){
            setActiveTab(e.target.id)
        }
    }
    // const reorderFn = (e) => {
    //     const currentOrder = orders.find(item =>  parseFloat(item.orderId) === parseFloat(e.target.id))
    //     console.log(currentOrder)
    //     currentOrder.product.forEach(element => {
    //         dispatch(addToCart(element.id))
    //     })
    // }
    return (
        <div className="orders">
            <h2 className="text-2xl text-white py-4">Orders</h2>
            <div className="orders-panel-title flex justify-between px-4">
                <p className="py-2 text-stone-200 min-w-1/8">Order #</p>
                {/* <p className="py-2 text-stone-200 min-w-3/8">Products</p>
                <p className="py-2 text-stone-200 min-w-1/8">Date</p>
                <p className="py-2 text-stone-200 min-w-1/8">Quantity</p>
                <p className="py-2 text-stone-200 min-w-1/8">Total</p>
                <p className="py-2 text-stone-200 min-w-1/8">Status</p> */}
            </div>
            <div className="flex flex-col gap-4 orders-container">
            {orders.map((item) => (
                <div key={item.orderId} id={item.orderId} onClick={accordionFn} className="order flex flex-col bg-stone-100 border border-amber-200 rounded-lg p-4 cursor-pointer">
                    <div className="order-title flex justify-between pointer-events-none">
                        <p className="py-2 text-stone-800 min-w-1/8">#{item.orderId}-order</p>
                        <p className="py-2 text-stone-800 min-w-3/8">{item.product.productName}</p>
                        <p className="py-2 text-stone-800 min-w-1/8">{item.orderDate}</p>
                        <p className="py-2 text-stone-800 min-w-1/8">{item.quantity}</p>
                        <p className="py-2 text-stone-800 min-w-1/8">{item.totalPrice}</p>
                        <p className={`${getStatusColor(item.orderStatus)} py-2 min-w-1/8`}>{item.orderStatus}</p>
                    </div>
                    <div id={item.orderId} className={`${ parseFloat(activetab) === parseFloat(item.orderId) ? 'flex' : 'hidden'} order-content transition ease-in delay-100`}>
                        <div className="flex flex-col gap-4">
                            <div>content {item.orderId}</div>
                            <Button id={item.orderId} buttonClass="text-stone-800 bg-amber-400 hover:text-white hover:bg-amber-500 px-4 py-2 rounded dark:text-white" title={'Reorder'} />
                        </div>
                        
                    </div>
                </div>
            ))}
            </div>

        </div>
    )
}

export default Orders