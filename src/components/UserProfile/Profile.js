import React from "react"
import UserProfile from "./UserProfile"
import UserProfileNav from "./UserProfile/UserProfileNav";
import UserProfileTab from "./UserProfile/UserProfileTab";
import OrdersProfile from "./UserProfile/OrdersProfile"
import NotificationPanel from './UserProfile/UserNotifications'

function Profile () {
    const links = [
        {
            linktitle: 'User info',
            linkid: 1
        },
        {
            linktitle: 'Orders',
            linkid: 2
        },
        {
            linktitle: 'Notifications',
            linkid: 3
        }
    ]
    const tabs = [
        {
            tabtitle: 'User info',
            tabcontent: <UserProfile/>,
            tabid: 1
        },
        {
            tabtitle: 'User info',
            tabcontent: <OrdersProfile/>,
            tabid: 2
        },
        {
            tabtitle: 'User info',
            tabcontent: <NotificationPanel />,
            tabid: 3
        },
    ]
    const tabsRef = React.useRef(tabs);
    const [currentPannel, setCurrentPanel] = React.useState('1')
    const switchPanel = (e) => {
        const target = e.target
        if(target.classList.contains('nav-link')) {
            setCurrentPanel(target.id)
        }
    }
    return (
        <div className="flex h-full">
            <div className="profile-nav flex flex-col gap-12 border-r border-stone-500">
                <h3 className="text-stone-200 dark:text-stone-800 text-xl font-semibold">User Profile</h3>
                <ul onClick={switchPanel} className="flex flex-col gap-2">
                    {links.map(link => (
                        <UserProfileNav activeLink={currentPannel} key={link.linkid} title={link.linktitle} id={link.linkid} />
                    ))}
                </ul>
            </div>
            <div className="tabs w-full ml-4" ref={tabsRef}>
                {
                    tabs.map(tab => (
                        <UserProfileTab activeTab={currentPannel} key={tab.tabid} tabcontent={tab.tabcontent} id={tab.tabid} title={tab.tabtitle}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Profile