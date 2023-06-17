import React, { createContext, useState } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (message) => {
    setAlertMessage(message);
    setIsAlertVisible(true);
  };

  const hideAlert = () => {
    setIsAlertVisible(false);
    setAlertMessage("");
  };

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}
      {isAlertVisible && (
        <div className="alert-container">
          <div className="alert">
            <p>{alertMessage}</p>
            <button onClick={hideAlert}>Close</button>
          </div>
        </div>
      )}
    </AlertContext.Provider>
  );
};
