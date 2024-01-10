import React from "react";
import SigninForm from "./SignInForm";
import RegisterForm from "./RegisterForm";
import Button from "../SpecialComponents/Button";

function ModalAuthWindow({ isOpen, modalInfo, onClose,isLogginFn,errorState,loginStatus }) {
    if(!isOpen) return null
    return (
        <div
        className={`Modal absolute w-full h-screen top-0 left-0 ${
            isOpen ? "flex items-center justify-center " : "hidden"
        }`}
        >
            <Button buttonClass={`bg-amber-300`} title="close" onClick={() => onClose()}/>
            {modalInfo === "SignIn" ? <SigninForm  getDataForm={isLogginFn} errorState={errorState} loginStatus={loginStatus}/> : null}
            {modalInfo === "Registration" ? <RegisterForm  /> : null}
            <div className="Modal-bg backdrop-blur-md absolute w-full h-screen" onClick={() => onClose()}></div>
        </div>
    )
}

export default ModalAuthWindow;

