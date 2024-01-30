import React from "react";
import { useSelector } from "react-redux";

function NotificationPanel() {
  const notifications = []

  return (
    <div className="notification-panel px-4">
      {notifications.length === 0 ? (
        <div className="flex justify-center">
            <p className="text-white text-xl">No notifications available...</p>
        </div>
      ) : (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>{notification.message}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotificationPanel;