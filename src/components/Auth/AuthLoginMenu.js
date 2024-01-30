import React from "react"
import { useDispatch } from "react-redux"
import { logout } from "../../store/slices/authSlice"
import { openModal } from "../../store/slices/modalSlice"

function AuthLoginMenu ({isActive, isActiveFn}) {
    const modalRef = React.useRef(null)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
        isActiveFn(false)
    }
    const modalActiveProfile = () => {
        dispatch(openModal('1'))
    }
    const modalActiveOrders = () => {
        dispatch(openModal('2'))
    }
    const handleClickOutside = (event) => {
        if (!event.target.classList.contains('authmodal') && modalRef.current.classList.contains('flex')) {
          isActiveFn(false)
        }
    }
    React.useEffect(() => {
        if (isActive) {
          const clickOutsideTimeout = setTimeout(() => {
            document.addEventListener("click", handleClickOutside);
          }, 200);
    
          return () => {
            clearTimeout(clickOutsideTimeout);
            document.removeEventListener("click", handleClickOutside);
          };
        }
    }, [isActive, isActiveFn]);
    return (
        <>
            <div className={`${isActive ? "flex " : "hidden" } fixed w-44 h-96 top-28 right-0 z-40`} >
                <div 
                    className={`${isActive ? "flex right-4" : "hidden -right-10"} absolute top-30 z-50 bg-stone-900 dark:bg-amber-400 rounded w-full p-8 transition ease-in duration-300 authmodal`}
                    ref={modalRef}
                >
                    <ul className="text-md text-stone-300 dark:text-stone-600 gap-2 flex flex-col">
                        <li id="1" className="dark:hover:text-stone-900 hover:text-amber-400 cursor-pointer" onClick={modalActiveProfile}>Profile</li>
                        <li id="2" className="dark:hover:text-stone-900 hover:text-amber-400 cursor-pointer" onClick={modalActiveOrders}>Orders</li>
                        <li className="dark:hover:text-stone-900 hover:text-amber-400 cursor-pointer" onClick={handleLogout}>Exit</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AuthLoginMenu