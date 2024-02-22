import React from "react"
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './Products.css'
import productListData from "../productListData";
import Button from "../SpecialComponents/Button";
import { useDispatch } from "react-redux";
import { addToCart } from '../../store/slices/cartSlice'
import Rating from "../SpecialComponents/Rating";
  
function PopularProducts () {
    const dispatch = useDispatch()
    function handleAddToCart (e) {
        let productItem = productListData.find(item => item.id === e.target.id)
        if(e.target.classList.contains('active')) {
        } else {
            dispatch(addToCart(productItem))
        }
    }
    const filteredSlides = productListData.filter(item => item.productRating === 5).slice(0, 7);
    return (
        <div className="container mx-auto px-5 my-16 lg:px-32 lg:pt-12">
            <div className="flex flex-col">
                <h3 className="dark:text-white text-center text-5xl font-semibold">Most Popular <span className="text-amber-500">Food</span></h3>
                <Splide 
                    className="popular-products--slider" 
                    aria-label="popular-products--slider"
                    options={{
                        updateOnMove: true,
                        type: 'loop',
                        perPage: 3,
                        perMove: 1,
                        gap: 24,
                        focus: 'center',
                        arrows : false,
                        pagination: false
                    }}
                >
                    {
                        filteredSlides.map(item => {
                            if(item.productRating === 5) {
                                return (
                                    <SplideSlide key={item.id}>
                                        <div className="flex flex-col justify-between bg-white dark:bg-yellow-50 shadow-lg w-full h-96 overflow-hidden rounded-xl shadow-4 dark:shadow-none">
                                            <img src={item.productImg} className="object-cover h-64 w-full"/>
                                            <div className="flex flex-row gap-4 p-6 h-full"> 
                                                <div className="w-1/2 flex flex-col justify-between">
                                                    <h3 className="text-md font-semibold">{item.productName}</h3>
                                                    <div>
                                                        <Rating  productRating={item.productRating}/>
                                                    </div>
                                                </div>
                                                <div className="w-1/2 flex flex-col justify-between items-end">
                                                    <div><Button id={item.id} handleClick={handleAddToCart} buttonClass={`text-white bg-amber-400 px-4 py-2 rounded text-sm font-medium hover:text-amber-100 hover:bg-amber-500`} title="Add to cart" /></div>
                                                    <div className="text-xl font-semibold">{item.productPrice}</div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </SplideSlide>
                                )
                            }
                        })
                    }
                </Splide>
            </div>
        </div>
    )
}

export default PopularProducts