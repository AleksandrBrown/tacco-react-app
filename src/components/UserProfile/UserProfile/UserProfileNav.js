import React from "react"

function UserProfileNav ({title,id,activeLink}) {
    const [activelink, setActiveLink] = React.useState(false)
    React.useEffect(()=> {
        if(parseFloat(activeLink) === parseFloat(id)) {
            setActiveLink(true)
        } else {
            setActiveLink(false)
        }
    }, [activeLink])
    return (
        <li className={`${activelink ? 'border-amber-400' : 'border-transparent'} nav-link px-4 border-r-2 py-2 text-right text-amber-400 hover:text-amber-500 dark:text-stone-800 cursor-pointer`} id={id}>{title}</li>
    )
}

export default UserProfileNav