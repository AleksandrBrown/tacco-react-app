import productIconChicken from "../assets/tacoProduct.png"
import productIconPorke from "../assets/tacoPorkeProduct.png"
import productIcon from "../assets/productImg.png"

const productListData = [
    {   
        productName: "Taco & chicken",
        productImg: productIconChicken,
        productDescr: "Elevate your taste experience with our Chicken Taco",
        productPrice: "10$",
        productRating: [1,2,3,4,5],
        id: 1
    },
    {   
        productName: "Taco & porke",
        productImg: productIconPorke,
        productDescr: "Elevate your taste experience with our Porke Taco",
        productPrice: "15$",
        productRating: [1,2,3,4,5],
        id: 2
    },
    {   
        productName: "Taco & lamb",
        productImg: productIcon,
        productDescr: "Elevate your taste experience with our Lamb Taco",
        productPrice: "25$",
        productRating: [1,2,3,4,5],
        id: 3
    }
]

export default productListData