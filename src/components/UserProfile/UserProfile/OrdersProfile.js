import React from "react"
import { useSelector,useDispatch } from "react-redux"

function OrdersProfile () {
    const orders = useSelector((state) => state.user.orders)
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
    console.log(orders)
    return (
        <div className="flex p-4">
            <table className="border-separate border-spacing-y-4 table-auto w-full">
                <thead>
                    <tr className="text-left font-semibold text-amber-200">
                    <th>Order #</th>
                    <th>Products</th>
                    <th>Date</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody className="text-stone-300">
                {orders.map((item) => (
                    <tr key={item.orderId}>
                    <td className="py-2 border-b border-amber-50">#{item.orderId}-order</td>
                    <td className="py-2 border-b border-amber-50">{item.product.productName}</td>
                    <td className="py-2 border-b border-amber-50">{item.orderDate}</td>
                    <td className="py-2 border-b border-amber-50">{item.quantity}</td>
                    <td className="py-2 border-b border-amber-50 text-amber-200">{item.totalPrice}</td>
                    <td className={`${getStatusColor(item.orderStatus)} y-2 border-b border-amber-50`}>{item.orderStatus}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrdersProfile