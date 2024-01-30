import React from "react";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import mainImg from './assets/mainImg.png'
import Button from "./components/SpecialComponents/Button";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";
import HomeScreenBg from './assets/blob-bg.svg';
import AboutUs from "./components/OtherBlocks/AboutUs";
import PopularProducts from "./components/Products/PopularProducts";
import ForWho from "./components/OtherBlocks/ForWho";
import Reviews from "./components/OtherBlocks/Reviews";
import AuthLoginMenu from "./components/Auth/AuthLoginMenu";

function Home () {
    const isLoggin = useSelector((state) => state.auth.isLogged)
    const [isCartActive, setCartActive] = React.useState(false)
    const [isMenuActive, setMenuActive] = React.useState(false)
    function handleCartOpener() {
        if(isMenuActive === true) setMenuActive(false)
        setCartActive(!isCartActive)
    }
    function handleAuthMenu () {
        if(isCartActive === true) setCartActive(false)
        setMenuActive(!isMenuActive)
    }
    return (
        <div className="Home bg-yellow-50 dark:bg-gray-900 px-4 pt-4 overflow-x-hidden bg-radial-gradient-ellipse-from-111419-to-272F35 h-screen">
            <Header activeMethods={handleCartOpener} handleAuthMenu={handleAuthMenu} loginStatus={isLoggin} isMenuActive={isMenuActive}/>
            <div className="flex flex-col items-center justify-center">
                <div className="homeScreen flex justify-between max-w-screen-xl h-dvh">
                    <div className="text-block w-1/2 flex flex-col gap-4 justify-center">
                            <h1 className=" dark:text-white font-semibold text-9xl">Taco<span className="text-amber-500">Craft</span></h1>
                            <p className="text-slate-600 dark:text-slate-400 text-2xl">Crafting Culinary Magic, One Tacco at a Time</p>
                            <div className="mt-8">
                                <Button buttonClass={`bg-amber-400 px-4 py-2 rounded font-medium dark:text-white hover:bg-amber-500 cursor-pointer`}  title="Create one"/>
                            </div>
                    </div>
                    <div className="mainImg w-1/2 flex items-center relative">
                        <img className="relative z-10" src={mainImg} alt="mainImg"/>
                        <img className="absolute left-0 z-0 h-screen" src={HomeScreenBg} alt="" />
                    </div>
                </div>
                <AboutUs/>
                <PopularProducts />
                <ForWho />
                <Reviews />
                {/* {isLoggin ? <OrderAgain/> : null} */}
                {/* <OurProducts /> */}
                {/* <SaleToday /> */}
                {/* <GalleryBlock /> */}
            </div>
            <Footer />
            <Cart isActive={isCartActive} handleCartCloser={handleCartOpener}/>
            <AuthLoginMenu isActive={isMenuActive} isActiveFn={setMenuActive}/>
        </div>
    )
}

export default Home