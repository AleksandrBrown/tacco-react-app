import React from "react";
import ProductsList from "./ProductsList";
import productIcon from "../../assets/productImg.png"
import productIconChicken from "../../assets/tacoProduct.png"
import productIconPorke from "../../assets/tacoPorkeProduct.png"
function OurProducts () {
    const ProductsArr = [
        {   
            productName: "Taco with chicken",
            productImg: productIconChicken,
            productDescr: "Elevate your taste experience with our Chicken Taco",
            productPrice: "10$"
            
        },
        {   
            productName: "Taco with porke",
            productImg: productIconPorke,
            productDescr: "Elevate your taste experience with our Porke Taco",
            productPrice: "15$"
        },
        {   
            productName: "Taco with lamb",
            productImg: productIcon,
            productDescr: "Elevate your taste experience with our Lamb Taco",
            productPrice: "25$"
        }
    ]
    return (
        <div className="flex max-w-screen-xl">
            <ProductsList list={ProductsArr}/>
        </div>
    )
}

export default OurProducts