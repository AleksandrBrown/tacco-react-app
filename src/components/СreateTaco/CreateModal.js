import React from "react";
import IngList from './IngList'
import { XMarkIcon } from "@heroicons/react/24/outline";

function CreateModal ({isActive, handleCreateModal}) {
    const [curoffer, setCurOffer] = React.useState('')
    const [stopcreate, setStopCreate] = React.useState({
        activeWindow: false,
        closeCreate: false
    })
    React.useEffect(() => {
        if (stopcreate.closeCreate) {
          handleCreateModal();
          setStopCreate(prev => ({ ...prev, closeCreate: false }));
        }
    }, [stopcreate.closeCreate]);
    function closeTacoCreate () {
        setStopCreate(prev => ({...prev, activeWindow: true}))
    }
    return (
        <div className={`${isActive ? 'flex' : 'hidden' } create-modal justify-center items-center fixed top-0 left-0 w-full h-dvh z-20`}> 
            <div className="bg-stone-900 w-2/3 h-2/3 rounded-md p-4 relative z-30 flex flex-col">
                <IngList handleCreateModal={handleCreateModal} activeWindow={stopcreate.activeWindow} handleClose={setStopCreate}/>
            </div>
            <div className="fixed top-0 left-0 z-20 w-full h-dvh backdrop-blur-sm" onClick={closeTacoCreate}></div>
        </div>
    )
}
export default CreateModal