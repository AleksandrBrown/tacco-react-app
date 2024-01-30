import React from "react"
import { useSelector,useDispatch } from "react-redux"
import Button from "../SpecialComponents/Button"
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { userIcons } from '../../components/userIcons'
import { updatedUser } from '../../store/slices/userSlice'
function UserProfile () {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.user)
    const [isedit, setIsEdit] = React.useState(false)
    const [iconspanel, setIconPanel] = React.useState(false)
    const [activeId, setActiveId] = React.useState(currentUser.iconId)
    const [currentUserData, setCurrentUserData] = React.useState({
        name: currentUser.name,
        surname: currentUser.surname,
        phone: currentUser.phone,
        email: currentUser.email,
        icon: currentUser.icon
    })
    React.useEffect(() => {
        setCurrentUserData({
          name: currentUser.name,
          surname: currentUser.surname,
          phone: currentUser.phone,
          email: currentUser.email,
          icon: currentUser.icon
        })
    }, [currentUser]);
    const formFn = (e) => {
        e.preventDefault()
        dispatch(updatedUser(currentUserData))
        setIsEdit(false)
    }
    const editUser = () => {
        setIsEdit(true)
    }
    const handleIconPanel = () => {
        setIconPanel(!iconspanel)
    }
    const switchIcon = (e) => {
        const newIconId = e.target.id
        const newIcon = userIcons.find(img => parseFloat(img.iconId) === parseFloat(newIconId))
        setActiveId(newIconId)
        setCurrentUserData((prevUserData) => ({
          ...prevUserData,
          icon: newIcon.iconPath,
        }))
        setIconPanel(false)
    }
    const handleClickOutside = (event) => {
        console.log(event.target)
        if (!event.target.classList.contains('icons-panel') && !event.target.classList.contains('icon-selector') ) {
            setIconPanel(false)
        }
    }
    React.useEffect(() => {
        if (iconspanel) {
          const clickOutsideTimeout = setTimeout(() => {
            document.addEventListener("click", handleClickOutside)
          }, 200)
    
          return () => {
            clearTimeout(clickOutsideTimeout);
            document.removeEventListener("click", handleClickOutside)
          }
        }
    }, [iconspanel]);
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setCurrentUserData({
          ...currentUserData,
          [name]: value,
        })
    }
    return (
        <div className="flex flex-col gap-6 items-center w-full h-full">
            <form className="flex flex-col gap-6 items-center w-full md:w-10/12 h-full pt-10">
                <div className="user-icon relative">
                    <img className="w-28 h-28 bg-amber-400 rounded-full relative" src={currentUserData.icon} alt="icon" />
                    <PencilSquareIcon className={`${isedit ? 'flex' : 'hidden' } absolute w-10 h-10 right-0 bottom-0 bg-white hover:bg-stone-200 cursor-pointer rounded-full p-2`} onClick={handleIconPanel}/>
                    <div className={`${iconspanel && isedit ? 'grid' : 'hidden'} icons-panel grid-cols-3 gap-2 absolute mt-2 left-0 h-48 w-72 bg-white dark:bg-slate-800 z-20 p-4 rounded overflow-y-scroll`}>
                        {userIcons.map(icon => {
                            return <div 
                                key={icon.iconId}
                                className={`${parseFloat(activeId) === parseFloat(icon.iconId) ? 'bg-lime-400 hover:bg-lime-200' : 'bg-amber-200 hover:bg-amber-300'} icon-selector flex justify-center cursor-pointer  hover:bg-amber-300 rounded-md`}
                                onClick={switchIcon}
                                id={icon.iconId}
                            ><img className="w-12 h-12 pointer-events-none" src={icon.iconPath}  alt={icon.iconId + 'icon'}/></div>
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-6/12 h-full">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="user-name flex gap-2 h-10">
                            <div className="flex text-lg text-amber-400 w-1/3">Name:</div>
                            <div className="w-2/3">
                                <h4 className={`${!isedit? 'flex' : 'hidden'} text-lg text-stone-200 dark:text-slate-800 text-left`}>{currentUser.name}</h4>
                                <input 
                                    className={`${isedit? 'flex' : 'hidden'} p-2 rounded-md bg-transparent text-white dark:text-slate-800 dark:placeholder:text-slate-600 placeholder:text-stone-200 border border-stone-200 dark:border-slate-400`} 
                                    placeholder={currentUser.name}
                                    name="name"
                                    value={currentUserData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="user-surname flex gap-2 text-left h-10">
                            <div className="flex text-lg text-amber-400 w-1/3">Surname:</div>
                            <div className="w-2/3">
                                <h4 className={`${!isedit? 'flex' : 'hidden'} text-lg text-stone-200 dark:text-slate-800 text-left`}>{currentUser.surname}</h4>
                                <input 
                                    className={`${isedit? 'flex' : 'hidden'} p-2 rounded-md bg-transparent text-white dark:text-slate-800 dark:placeholder:text-slate-600 placeholder:text-stone-200 border border-stone-200 dark:border-slate-400`} 
                                    placeholder={currentUser.surname}
                                    name="surname"
                                    value={currentUserData.surname}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="user-phone flex gap-2 text-left h-10">
                            <div className="flex text-lg text-amber-400 w-1/3">Phone:</div>
                            <div className="w-2/3">
                                <h4 className={`${!isedit? 'flex' : 'hidden'} text-lg text-stone-200 dark:text-slate-800`}>{currentUser.phone}</h4>
                                <input 
                                    className={`${isedit? 'flex' : 'hidden'} p-2 rounded-md bg-transparent text-white dark:text-slate-800 dark:placeholder:text-slate-600 placeholder:text-stone-200 border border-stone-200 dark:border-slate-400`} 
                                    placeholder={currentUser.phone}
                                    name="phone"
                                    value={currentUserData.phone}
                                    onChange={handleInputChange}    
                                />
                            </div>
                        </div>
                        <div className="user-email flex gap-2 text-left">
                            <div className="flex text-lg text-amber-400 w-1/3">Email:</div>
                            <div className="w-2/3">
                                <h4 className={`${!isedit? 'flex' : 'hidden'} text-lg text-stone-200 dark:text-slate-800`}>{currentUser.email}</h4>
                                <input 
                                    className={`${isedit? 'flex' : 'hidden'} p-2 rounded-md bg-transparent text-white dark:text-slate-800 dark:placeholder:text-slate-600 placeholder:text-stone-200 border border-stone-200 dark:border-slate-400`} 
                                    placeholder={currentUser.email}
                                    name="email"
                                    value={currentUserData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className={`${isedit? 'flex' : 'hidden'} `}>
                    <button 
                        type="submit"
                        className="text-white bg-amber-400 hover:bg-amber-500 px-4 py-2 rounded"
                        onClick={formFn}
                    >
                        Save changes
                    </button>
                </div>
            </form>
            <div className="flex">
                <Button buttonClass={`${isedit? 'hidden': 'flex'} text-white bg-amber-400 hover:bg-amber-500 px-4 py-2 rounded`} title='Edit profile' handleClick={editUser} />
            </div>
        </div>
    )
}

export default UserProfile