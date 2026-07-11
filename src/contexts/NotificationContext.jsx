import { createContext, useContext, useState, useEffect } from "react";

const NotificationContext = createContext();

const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotificationはNotificationProvider内で使用してください'
    );
  }
  return context;
};

const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);
  
  const showNotification = (type, message) => {
    setNotification({ type, message });
  };
  
  useEffect(() => {
    // If notification exists, put null in setNotification in 3 secs to make a message not-display.
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      
      // Cleanup. WIthout this one, old timers would still remain.
      return () => clearTimeout(timer);
    }
  }, [notification]);
  
  return (
    <NotificationContext.Provider value={{ notification, showNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationProvider, useNotification };