/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

// Crear el contexto
export const GuestContext = createContext();

// Proveedor del contexto
export const GuestProvider = ({ children }) => {
  const [guestData, setGuestData] = useState({
    name: '',
    email: '',
  });

  return (
    <GuestContext.Provider value={{ guestData, setGuestData }}>
      {children}
    </GuestContext.Provider>
  );
};