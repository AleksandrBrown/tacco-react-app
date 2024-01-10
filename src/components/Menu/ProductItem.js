import React from "react";


function ProductItem ({productInfo}) {
    const [isAdded, setIsAdded] = React.useState(false)

    const clickHandler = () => {
        setIsAdded(!isAdded)
    }
    return (
        <div
        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-amber-500 w-1/3 overflow-hidden">
        <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-te-ripple-init
            data-te-ripple-color="light">
            <img
            className="rounded-t-lg w-full h-80"
            src={productInfo.productImg}
            alt={productInfo.productName} />
            <a href="#!">
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(98,75%,66%,.4)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
        </div>
        <div className="p-6">
            <h5
            className="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {productInfo.productName}
            </h5>
            <p className="mb-4 text-lg text-neutral-600 dark:text-neutral-200">
            {productInfo.productDescr}
            </p>
            <div className="flex flex-row justify-between">
                <p className="text-white font-semibold text-4xl">{productInfo.productPrice}</p>
                <button
                onClick={clickHandler}
                type="button"
                className={`${isAdded ? "is-active " : "" }bg-amber-700 inline-block rounded px-10 pb-3 pt-3 text-sm font-medium uppercase leading-normal text-white hover:bg-amber-300 ease-in transition`}
                data-te-ripple-init
                data-te-ripple-color="light">
                {isAdded ? "Remove" : "Add"}
                </button>
            </div>

        </div>
        </div>
    )
}

export default ProductItem