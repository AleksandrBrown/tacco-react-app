import React from "react"
import productIconChicken from "../../assets/tacoProduct.png"
import productIconPorke from "../../assets/tacoPorkeProduct.png"

function ToggleBtn ({ id, buttonClasses }) {
    const [isActive, setIsActive] = React.useState(false);

    const handleClick = () => {
      setIsActive(!isActive)
    }
    return (
      <button id={id} className={buttonClasses + `${isActive ? ' active' : ''}`} onClick={handleClick}> {isActive ? '-' : '+'}</button>
    )
}


function OrderAgain({handleAddToCart, handleCardOpnr}) {
    const [count, setCount] = React.useState(0)
    const OrderAgainArray = [
        {   
            productName: "Taco with chicken",
            productImg: productIconChicken,
            productPrice: "10",
            data: "01/11",
            id: 1
        },
        {   
            productName: "Taco with porke",
            productImg: productIconPorke,
            productPrice: "15",
            data: "01/11",
            id: 2
        },
    ]
    function addToCartAgain (e) {
        let productItem = OrderAgainArray.find(item => item.id === parseFloat(e.target.id))
        let status = ""
        if(e.target.classList.contains('active')) {
            setCount(count-1)
            handleAddToCart(productItem, status = "remove")
        }else{
            setCount(count+1)
            handleAddToCart(productItem, status = "add")
        }
        
        
    }
    return (
        <div className="flex flex-row gap-6">
            {OrderAgainArray.map(item => (
                <div
                    key={item.id}
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
                        <div onClick={addToCartAgain}>
                            <ToggleBtn
                                id={item.id}
                                buttonClasses={"font-bold text-lg text-amber-300 bg-amber-600 rounded-2xl w-8 h-8 flex justify-center items-center active:translate-y-0.5"}
                            />
                        </div>
                   </div>
                   </div>



            ))}
            <div className="flex flex-col gap-2 justify-center items-center">
                <p className=" font-semibold text-3xl text-white">{count}</p>
                <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 rounded text-white text-lg transition ease-in" onClick={handleCardOpnr}>
                    Order again
                </button>
            </div>
            
        </div>
    )
}
export default OrderAgain