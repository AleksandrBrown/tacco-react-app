import React from "react";
import SigninForm from "./SignInForm";
import RegisterForm from "./RegisterForm";
import Button from "../SpecialComponents/Button";

function ModalAuthWindow({ isOpen, onClose }) {
    // if(!isOpen) return null
    const [showSignIn, setShowSignIn] = React.useState(true)
    const switchPanel = () => {
        setShowSignIn((state) => !state);
    }
    return (
        <div
        className={`Modal absolute w-full h-screen top-0 left-0 ${
            isOpen ? "flex items-center justify-center " : "hidden"
        }`}
        >
            {/* <Button buttonClass={`bg-amber-300`} title="close" onClick={() => onClose()}/> */}
            {showSignIn ? <SigninForm handleSwitcher={switchPanel}/> : <RegisterForm handleSwitcher={switchPanel} />}
            <div className="Modal-bg backdrop-blur-md absolute w-full h-screen z-20" onClick={() => onClose()}></div>
        </div>
    )
}

export default ModalAuthWindow;

