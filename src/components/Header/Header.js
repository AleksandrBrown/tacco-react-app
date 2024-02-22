import React from "react"
import { Events, animateScroll as scroll } from 'react-scroll'
import './Header.css'
import logo from "../../assets/logo.png"
import { MoonIcon, ShoppingCartIcon, SunIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import TacoCategory from "../Menu/MenuCategory"
import Button from "../SpecialComponents/Button"
import ModalAuthWindow from "../Auth/ModalAuthWindow"
import Modal from "../SpecialComponents/Modal";
import PortalComponent from "../SpecialComponents/Rportal"
import { useSelector,useDispatch } from "react-redux"
import { swapTheme } from '../../store/slices/themeSlice'


function Header ({activeMethods, isLogginFn, errorState, handleAuthMenu, isMenuActive, loginStatus}) {
    //Header position
    //User state
    const isLogged = useSelector((state) => state.auth.isLoggedIn)
    const userIcon = useSelector((state) => state.user.icon)
    // Theme
    const currentTheme = useSelector((state) => state.theme.value)
    const [themeIcon, setThemeIcon] = React.useState(<i className="gg-sun"></i>)
    const dispatch = useDispatch()
    // authModal
    const [currentModalInfo, setModalInfo] = React.useState(null)
    const [isOpenModalOpen, setModalOpen] = React.useState(false)
    // Nav
    const [scrolled, setScrolled] = React.useState(false)
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
    React.useEffect(() => {
        if(currentTheme === 'dark') {
            setThemeIcon(<MoonIcon className="group-hover:text-slate-100 text-white" />)
        } else {
            setThemeIcon(<SunIcon className="group-hover:text-amber-200 text-amber-300"/>)
        }
    },[currentTheme])
    React.useEffect(() => {
        setModalOpen(false)
    },[isLogged])
    return (
        <header className={`${scrolled ? 'fixed top-5' : 'relative'} bg-stone-900 px-10 flex items-center justify-between rounded-md header`}>
            <a href="/"className="Logo-container cursor-pointer">
                <img src={logo} alt="logo" className="h-20"/>
            </a>
            <TacoCategory list={navList} />
            <div className="flex gap-4" onClick={handleModalButtonClick}>
            <Button handleClick={activeMethods} buttonClass="group border border-transparent hover:border-amber-400 px-4 py-2 rounded font-medium hover:text-stone-800 hover:bg-transparent transition easy-in" title={<ShoppingCartIcon className="text-white h-6 group-hover:text-amber-400 pointer-events-none"/>}/>
                {!isLogged ? (
                    <Button
                        buttonClass="SignIn group px-4 py-2 rounded font-medium hover:bg-amber-500 transition easy-in w-14" 
                        title={<UserCircleIcon className="text-white h-6 group-hover:text-stone-800 pointer-events-none" />
                    } /> )
                    : (
                        <Button
                            handleClick={handleAuthMenu}
                            buttonClass={`${isMenuActive? 'bg-amber-600' : ''} Logged group px-4 py-2 rounded font-medium hover:bg-amber-600 transition easy-in delay-400 w-14 cursor-pointer`}
                            title={!isLogged ? <UserCircleIcon className="text-stone-200 h-6 group-hover:text-stone-800 pointer-events-none" /> : <img src={userIcon} alt="icon" className="bg-amber-400 rounded-full"/>
                        } 
                        />
                )}
                <Button handleClick={handleTheme} buttonClass="group w-14 dark:text-white text-amber-300 px-4 rounded transition easy-in" title={themeIcon}/>
            </div>
            {<PortalComponent>
                <ModalAuthWindow isOpen={isOpenModalOpen} modalInfo={currentModalInfo} onClose={handleCloseModal} isLogginFn={isLogginFn} errorState={errorState} loginStatus={loginStatus}/>
            </PortalComponent> }
            {<PortalComponent>
                <Modal/>
            </PortalComponent> }
            
        </header>
    )
}

export default Header