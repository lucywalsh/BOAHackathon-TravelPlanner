import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export default function User({ children }) {
    const [user, setUser] = useState(null);

    const login = (email, password, NWGCustomer) => {
        setUser({email: email, password: password, NWGCustomer: NWGCustomer});
    }

    const logout = () => {
        setUser(null)
    }

    return(
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider>
  );
    
}

export function useUser() {
    return useContext(UserContext);
  }