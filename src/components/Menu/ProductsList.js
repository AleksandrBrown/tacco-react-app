import React from "react";
import ProductItem from "./ProductItem";

function ProductsList ({list}) {
    return (
        <div className="my-16 flex flex-row gap-20 max-w-screen-xl">
            {list.map((item) => (
                <ProductItem productInfo={item}/>
            ))}
        </div>
    )
}

export default ProductsList