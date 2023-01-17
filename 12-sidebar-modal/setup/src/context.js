import React, { useState, useContext } from "react";
import App from "./App";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSideBar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setisModalOpen(true);
  };

  const closeModal = () => {
    setisModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
