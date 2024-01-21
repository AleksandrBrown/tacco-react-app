import React from "react";
import logo from "../../assets/logo.png"
import TacoCategory from "../Menu/TacoCategory"
import Button from "../SpecialComponents/Button";
import ModalAuthWindow from "../Auth/ModalAuthWindow"
import PortalComponent from "../SpecialComponents/Rportal";
import { useSelector } from "react-redux";

function Header ({activeMethods, isLogginFn, isLogginState, errorState, logOutFn, loginStatus}) {
    const cartR = useSelector((state) => state.cart.value)
    const [currentModalInfo, setModalInfo] = React.useState(null)
    const [isOpenModalOpen, setModalOpen] = React.useState(false)
    const navList = [
        {link: "#", linkName: "Home"},
        {link: "#", linkName: "MyTaco"},
        {link: "#", linkName: "OurTacos"},
        {link: "#", linkName: "About"},
        {link: "#", linkName: "Contacts"}
    ]
    const handleModalButtonClick = (e) => {
        if(e.target.classList.contains("SignIn")) {
            setModalOpen(true)
            setModalInfo("SignIn")
        } else if(e.target.classList.contains("Registration")) {
            setModalOpen(true)
            setModalInfo("Registration")
        }
    }
    const handleCloseModal = () => {
        console.log('close btn')
        setModalOpen(false)
    }
    return (
        <header className="bg-stone-900 px-10 flex items-center justify-between rounded-md">
            <a href="/"className="Logo-container cursor-pointer">
                <img src={logo} alt="logo" className="h-20"/>
            </a>
            <TacoCategory list={navList} />
            <div className="flex gap-4" onClick={handleModalButtonClick}>
                {cartR.length > 0 ? <p className="text-white text-xl">{cartR.length}</p> : ""}
                {!isLogginState ?<Button buttonClass="SignIn bg-slate-200 px-4 py-2 rounded font-medium hover:bg-slate-300 transition easy-in" title="Sign In"/>: ""}
                {!isLogginState ?<Button buttonClass="Registration bg-lime-200 px-4 py-2 rounded font-medium hover:bg-lime-300 transition easy-in" title="Registration"/>: ""}
                {isLogginState ? <Button handleClick={activeMethods} buttonClass="text-white px-4 py-2 rounded font-medium hover:text-stone-800 hover:bg-amber-300 transition easy-in" title="Cart"/> : ""}
                {isLogginState ? <Button handleClick={logOutFn} buttonClass="text-stone-800 px-4 py-2 rounded border-2 border-amber-300 font-medium bg-amber-300 hover:text-amber-300 hover:bg-transparent hover:border-amber-300 transition easy-in" title="Log Out"/> : ""}
            </div>
            {<PortalComponent>
                <ModalAuthWindow isOpen={isOpenModalOpen} modalInfo={currentModalInfo} onClose={handleCloseModal} isLogginFn={isLogginFn} errorState={errorState} loginStatus={loginStatus}/>
            </PortalComponent> }
            
        </header>
    )
}

export default Header