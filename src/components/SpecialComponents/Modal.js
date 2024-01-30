import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modalSlice";
import Profile from "../UserProfile/Profile";
import Checkout from "../Checkout/Checkout";
import Orders from "../OrderAgain/Orders";

function Modal () {
    const currentId = useSelector((state) => state.modal.current)
    const modalStatus = useSelector((state) => state.modal.isopen)
    const dispatch = useDispatch()
    const [curContent, setCurContent] = React.useState(null)
    React.useEffect(() => {
        const renderTabContent = (currentTab) => {
          switch (currentTab) {
            case '1':
              return <Profile />
            case '2':
              return <Orders />
            case '3':
              return <Checkout />
            default:
              return '1'
          }
        }
        const content = renderTabContent(currentId)
        setCurContent(content)
    }, [currentId])
    const closeFn = () => {
        dispatch(closeModal())
    }
    return (
            <div className={`${modalStatus ? 'flex' : 'hidden'} justify-center items-center modal-template fixed z-20 top-0 left-0 w-full h-screen` }>
                <div className="bg-stone-900 dark:bg-white w-2/3 h-2/3 relative z-50 p-8 rounded">
                    {curContent}
                </div>
                <div className="absolute top-0 left-0 backdrop-blur-md w-full h-screen z-20" onClick={closeFn}></div>
            </div>
    )
}

export default Modal