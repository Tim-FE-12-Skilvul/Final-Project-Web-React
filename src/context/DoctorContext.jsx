import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Buat context baru
const DoctorContext = createContext();

// Buat provider untuk DoctorContext
const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get(
        "https://64550ab8a74f994b33505ccc.mockapi.io/doctor"
      );
      console.log(response.data);
      setDoctors(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DoctorContext.Provider value={doctors, fetchDoctors}>{children}</DoctorContext.Provider>
  );
};

export { DoctorContext, DoctorProvider };
