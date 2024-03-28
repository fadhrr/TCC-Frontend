'use client'
// context/RoleContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from "@/context/AuthContext";
const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const currentUser = useAuth();
 

  useEffect(() => {
    if (!currentUser || !currentUser.uid) {
      setRole(null);
    }
  }, [currentUser]);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);
