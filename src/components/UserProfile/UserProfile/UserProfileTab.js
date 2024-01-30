import React from "react"

function UserProfileTab ({activeTab,tabcontent, id, title}) {
    const [activetab, setActiveTab] = React.useState(false)
    React.useEffect(()=> {
        if(parseFloat(activeTab) === parseFloat(id)) {
            setActiveTab(true)
        } else {
            setActiveTab(false)
        }
    }, [activeTab])
    return (
        <div className={`${activetab ? 'flex' : 'hidden'} tab h-full`} id={id}>
            <div className='w-full h-full'>
                {tabcontent}
            </div>
        </div>
    )
}

export default UserProfileTab