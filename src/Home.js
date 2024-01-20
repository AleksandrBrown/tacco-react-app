import React from "react";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import mainImg from './assets/mainImg.png'
import Button from "./components/SpecialComponents/Button";
import OurProducts from "./components/Menu/OurProducts";
import GalleryBlock from "./components/OtherBlocks/Gallery";
import SaleToday from "./components/OtherBlocks/SaleToday";
import OrderAgain from "./components/Menu/OrderAgain";
import Cart from "./components/Cart/Cart";
import {
    SET_VISIBILITY_FILTER,
    VisibilityFilters,
  } from './actions';

function Home () {
    
      
      /// ...
      
    function todoApp(state = initialState, action) {
        switch (action.type) {
          case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
              visibilityFilter: action.filter,
            });
          default:
            return state;
        }
    }
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [loggedError, setErrorState] = React.useState(false)
    const [loginStatus, setLoginStatus] = React.useState(false)
    const [cart, setCart] = React.useState([])
    const [totalCount, setNewTotal] = React.useState(0)
    const [isCartActive, setCartActive] = React.useState(false)
    function AuthFunction (userData) {
        const userAdmin = {
            username: "admin",
            password: "1111"
        }
        if(JSON.stringify(userAdmin) === JSON.stringify(userData)) {
            setIsLoggedIn(true)
            setLoginStatus(true)
            if(loggedError) setErrorState(false)
        } else {
            setErrorState(true)
        }
    }
    function handleLogOut () {
        setIsLoggedIn(false)
    }
    function handleAddToCart (product, status) {
        if(status === "remove" ) {
            const indexToDelete = cart.findIndex((element) => element.id === product.id)
            const newArray = cart.filter((_, index) => index !== indexToDelete)
            setNewTotal(totalCount => totalCount-parseFloat(product.productPrice))
            setCart(newArray)
        } else if(status === "add"){
            setCart([...cart,product])
            console.log(product)
            setNewTotal(totalCount => totalCount+parseFloat(product.productPrice))
        }
    }
    function handleCartOpener() {
        setCartActive(!isCartActive)
    }
    return (
        <div className="Home px-4 pt-4 overflow-x-hidden">
            <Header activeMethods={handleCartOpener} isLogginFn={AuthFunction} isLogginState={isLoggedIn} errorState={loggedError} logOutFn={handleLogOut} loginStatus={loginStatus}/>
            <div className="flex flex-col items-center justify-center">
                <div className="homeScreen flex justify-between max-w-screen-xl h-dvh">
                    <div className="text-block w-1/2 flex flex-col gap-4 justify-center">
                            <h1 className=" text-white font-semibold text-9xl">TaccoCraft</h1>
                            <p className=" text-slate-400 text-2xl">Crafting Culinary Magic, One Tacco at a Time</p>
                            <div className="mt-8">
                                <Button buttonClass={`bg-slate-200 px-4 py-2 rounded font-medium hover:bg-slate-300`}  title="Create one"/>
                            </div>
                    </div>
                    <div className="mainImg w-1/2 flex items-center">
                        <img src={mainImg} alt="mainImg"/>
                    </div>
                </div>
                {isLoggedIn? <OrderAgain handleAddToCart={handleAddToCart} handleCardOpnr={handleCartOpener}/> : null}
                <div className="flex flex-col items-center gap-4 max-w-screen-xl my-16">
                    <p className=" text-slate-400 text-2xl text-center">
                    Welcome to Tacco Temptations, where innovation meets tradition to create a taco experience that transcends the ordinary. Our brand is synonymous with tantalizing tastes, bringing you a symphony of flavors that will leave your taste buds singing.
                    </p> 
                    <p className=" text-slate-400 text-2xl text-center">
                    Join us in redefining the taco landscape. Tacco Temptations isn't just a brand; it's a commitment to delivering exceptional taste and an unforgettable journey for your senses.
                    </p>
                </div>
                <OurProducts />
                <div className="flex flex-col mx-auto max-w-screen-xl my-16">
                <p className="text-slate-400 text-2xl text-center">
                    At Tacco Temptations, we understand that the essence of a perfect taco lies not just in the ingredients but in the experience itself. Our vibrant and welcoming atmosphere sets the stage for a memorable dining adventure, where you can savor the magic of Tacco Temptations with every bite.
                </p>
                </div>
                <SaleToday />
                <div className="flex flex-col mx-auto max-w-screen-xl my-16">
                    <p className="text-slate-400 text-2xl text-center">Join us in redefining the taco landscape. Tacco Temptations isn't just a brand; it's a commitment to delivering exceptional taste and an unforgettable journey for your senses. Come, experience the extraordinary with Tacco Temptations – where every Tacco tells a story, and every bite is a revelation.</p>
                </div>
                <GalleryBlock />
            </div>
            <Footer />
            <Cart isActive={isCartActive} productList={cart} handleCartCloser={handleCartOpener} removeItem={handleAddToCart} totalCount={totalCount}/>
        </div>
    )
}

export default Home