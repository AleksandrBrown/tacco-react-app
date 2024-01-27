import React from "react";
import './Header.css'
import logo from "../../assets/logo.png"
import { ArrowRightEndOnRectangleIcon, MoonIcon, ShoppingCartIcon, SunIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import TacoCategory from "../Menu/MenuCategory"
import Button from "../SpecialComponents/Button"
import ModalAuthWindow from "../Auth/ModalAuthWindow"
import PortalComponent from "../SpecialComponents/Rportal"
import { useSelector,useDispatch } from "react-redux"
import { swapTheme } from '../../store/slices/themeSlice'
import { logout } from '../../store/slices/authSlice'


function Header ({activeMethods, isLogginFn, errorState, loginStatus}) {
    const isLogged = useSelector((state) => state.auth.isLoggedIn)
    const currentTheme = useSelector((state) => state.theme.value)
    const dispatch = useDispatch()
    const [currentModalInfo, setModalInfo] = React.useState(null)
    const [isOpenModalOpen, setModalOpen] = React.useState(false)
    const [themeIcon, setThemeIcon] = React.useState(<i className="gg-sun"></i>)
    const [isLogIn, setIsLogIn] = React.useState(false)
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
        setModalOpen(false)
    }

    const handleTheme = () => {
        dispatch(swapTheme())
    }

    React.useEffect(()=>{
        if(currentTheme === 'dark') {
            setThemeIcon(<MoonIcon className="group-hover:text-slate-100 text-white" />)
        } else {
            setThemeIcon(<SunIcon className="group-hover:text-amber-200 text-amber-300"/>)
        }
    },[currentTheme])
    React.useEffect(()=>{
        setModalOpen(false)
    },[isLogged])
    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <header className="bg-stone-900 px-10 flex items-center justify-between rounded-md">
            <a href="/"className="Logo-container cursor-pointer">
                <img src={logo} alt="logo" className="h-20"/>
            </a>
            <TacoCategory list={navList} />
            <div className="flex gap-4" onClick={handleModalButtonClick}>
                {!isLogged ?<Button buttonClass="SignIn group px-4 py-2 rounded font-medium hover:bg-amber-500 transition easy-in w-14" title={<UserCircleIcon className="text-white h-6 group-hover:text-stone-800 pointer-events-none" />}/>: ""}
                {isLogged ? <Button handleClick={activeMethods} buttonClass="group border border-amber-400 px-4 py-2 rounded font-medium hover:text-stone-800 bg-amber-400 hover:bg-transparent transition easy-in" title={<ShoppingCartIcon className="text-white h-6 group-hover:text-amber-400 pointer-events-none"/>}/> : ""}
                {isLogged ? <Button handleClick={handleLogout} buttonClass="group  px-4 py-2 rounded font-medium border border-transparent hover:border-amber-300 transition easy-in" title={<ArrowRightEndOnRectangleIcon className="text-white h-6 group-hover:text-amber-400 pointer-events-none"/>}/> : ""}
                <Button handleClick={handleTheme} buttonClass="group w-14 dark:text-white text-amber-300 px-4 rounded transition easy-in" title={themeIcon}/>
            </div>
            {<PortalComponent>
                <ModalAuthWindow isOpen={isOpenModalOpen} modalInfo={currentModalInfo} onClose={handleCloseModal} isLogginFn={isLogginFn} errorState={errorState} loginStatus={loginStatus}/>
            </PortalComponent> }
            
        </header>
    )
}

export default Header