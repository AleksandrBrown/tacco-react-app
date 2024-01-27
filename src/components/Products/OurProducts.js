import React from "react";
import ProductsList from "./ProductsList";
import productListData from "../productListData";

function OurProducts () {
    return (
        <div className="flex max-w-screen-xl">
            <ProductsList list={productListData}/>
        </div>
    )
}

export default OurProducts